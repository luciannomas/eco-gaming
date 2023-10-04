import { ENV } from "@/utils";
import jwtDecode from "jwt-decode";

const setToken = (token) => {
    localStorage.setItem(ENV.TOKEN, token);
}

const getToken = () => {
    return localStorage.getItem(ENV.TOKEN);
}

const removeToken = () => {
    localStorage.removeItem(ENV.TOKEN);
}

const hasExpired = (token) => {
    const tokenDecode = jwtDecode(token);
    const expireDate = tokenDecode.exp * 1000;
    const currentDate = new Date().getTime();

    if (currentDate > expireDate) {
        return true;
    }

    return false;
}

export async function authFetch(url, params) {
    const token = getToken();

    const logout = () => {
        removeToken();
        window.location.replace("/");
    };

    if (!token) {
        logout();
    } else {
        if (hasExpired(token)) {
            logout();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`,
                },
            };
            
            try {
                return await fetch(url, paramsTemp);
            } catch (error) {
                return error;
            }
        }
    }
}
