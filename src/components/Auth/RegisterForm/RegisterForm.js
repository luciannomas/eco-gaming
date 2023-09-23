
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.form";
import { useRouter } from "next/navigation";
//import { register } from "../../../app/api/index";

import { ENV } from "../../../utils/index";

const register = async (data) => {
    try {
        console.log("que llega:", data)
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

export function RegisterForm() {
    const router = useRouter();
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await register(formValue);
                router.push("/join/sign-in");
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input
                    name="email"
                    type="text"
                    placeholder="Correo electronico"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
                <Form.Input
                    name="username"
                    type="text"
                    placeholder="Nombre de usuario"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username}
                />
            </Form.Group>

            <Form.Group widths="equal">
                <Form.Input
                    name="name"
                    type="text"
                    placeholder="Nombre y apellidos"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                />
                <Form.Input
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
            </Form.Group>

            <Form.Button type="submit" fluid loading={formik.isSubmitting}>
                Registrarse
            </Form.Button>
        </Form>
    );
}