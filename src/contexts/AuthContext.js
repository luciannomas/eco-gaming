"use client";
import { useState, useEffect, createContext } from "react";
import { ENV } from "@/utils";
import jwtDecode from "jwt-decode";
import { authFetch } from "@/utils/authFetch";

export const AuthContext = createContext();

// tokenCtrl
const setTokenCtrol = (token) => {
    localStorage.setItem(ENV.TOKEN, token);
}

const getTokenCtrol = () => {
    return localStorage.getItem(ENV.TOKEN);
}

const removeTokenCtrol = () => {
    localStorage.removeItem(ENV.TOKEN);
}

const hasExpiredCtrol = (token) => {
    const tokenDecode = jwtDecode(token);
    const expireDate = tokenDecode.exp * 1000;
    const currentDate = new Date().getTime();

    if (currentDate > expireDate) {
        return true;
    }

    return false;
}

const getMeCtrol = async() => {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

      const response = await authFetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = getTokenCtrol();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (hasExpiredCtrol(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token) => {
    try {
      setTokenCtrol(token);
      const response = await getMeCtrol();
      setUser(response);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = () => {
    removeTokenCtrol();
    setToken(null);
    setUser(null);
  };

  const updateUser = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  }; 

  const data = {
    accessToken: null,
    user,
    login,
    logout,
    updateUser,
  };
  
  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
