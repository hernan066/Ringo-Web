import "./auth.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../api/apiAuth";
import { setCredentials } from "../../redux/authSlice";
import { useState } from "react";
import { GoogleAuth } from "./GoogleAuth";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Formato invalido").required("Requerido"),
  password: Yup.string().min(6, "6 caracteres mínimo").required("Requerido"),
});

export const LoginForm = ({routeNav}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [loginUser, { isLoading }] = useLoginMutation();

  const handleSubmit = async (values, resetForm) => {
    try {
      const userData = await loginUser({
        email: values.email,
        password: values.password,
      }).unwrap();
      if (userData) {
        dispatch(setCredentials({ ...userData }));
        resetForm();
        navigate(routeNav);
      }
    } catch (error) {
      console.log(error);
      setError(error.data);
    }
  };
  return (
    <div className="auth__form__container">
      <h2 className="title">Ingresa</h2>
      {error && (
        <p className="login__error">
          {error.msg ? error.msg : "Error en el login, inténtelo nuevamente"}
        </p>
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <Field type="email" name="email" placeholder="Ingresa tu email" />

            <ErrorMessage name="email" component="p" className="login__error" />

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
        <p>No tienes cuenta?</p> <Link to="/usuario/register">Regístrate</Link>
      </div>

      <p className="auth__init-with">O ingresa con</p>
      <GoogleAuth />
    </div>
  );
};
