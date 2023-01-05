import "./auth.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { usePostUserMutation } from "../../api/userApi";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Requerido"),
  lastName: Yup.string().required("Requerido"),
  phone: Yup.string().required("Requerido"),
  email: Yup.string().email("Formato incorrecto").required("Requerido"),
  password: Yup.string().min(6, "6 caracteres mínimo").required("Requerido"),
  rePassword: Yup.string()
    .min(6, "6 caracteres mínimo")
    .required("Requerido")
    .oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales"),
});

export const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [registerUser, { isLoading }] = usePostUserMutation();

  const handleSubmit = async (values) => {
    try {
      const userData = await registerUser({
        ...values,
        phone: `54${values.phone}`,
        role: process.env.REACT_APP_CLIENT_ROLE,
      }).unwrap();

      if (userData) {
        navigate("/usuario/register/success");
      }
    } catch (error) {
      console.log(error.data);
      setError(error.data);
    }
  };

  return (
    <main className="auth__container">
      <section className="auth__form">
        <div className="auth__form__container">
          <h2 className="title">Regístrate</h2>
          {error && (
            <p className="login__error">
              Error en el registro, inténtelo nuevamente
            </p>
          )}
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              email: "",
              phone: "",
              password: "",
              rePassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);

              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre"
                />

                <ErrorMessage
                  name="name"
                  component="p"
                  className="login__error"
                />
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Ingresa tu apellido"
                />

                <ErrorMessage
                  name="lastName"
                  component="p"
                  className="login__error"
                />

                <Field
                  type="email"
                  name="email"
                  placeholder="Ingresa tu email"
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="login__error"
                />
                {error?.email && <p className="login__error">{error.email.msg}</p>}
                
                <div className="auth__prefix-phone">
                  <span>+54</span>
                  <Field
                    type="phone"
                    name="phone"
                    placeholder="Ingresa tu telefono"
                  />
                </div>

                <ErrorMessage
                  name="phone"
                  component="p"
                  className="login__error"
                />
                 {error?.phone && <p className="login__error">{error.phone.msg}</p>}

                <Field
                  type="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="login__error"
                />

                <Field
                  type="password"
                  name="rePassword"
                  placeholder="Repite tu contraseña"
                />
                <ErrorMessage
                  name="rePassword"
                  component="p"
                  className="login__error"
                />

                <button
                  className={`btn-load ${isLoading ? "button--loading" : ""}`}
                  type="submit"
                  disabled={isLoading}
                >
                  <span className="button__text">Enviar</span>
                </button>
              </Form>
            )}
          </Formik>
          <div className="auth__link">
            <p>Ya tienes cuenta?</p> <Link to="/usuario/login">Ingresa</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
