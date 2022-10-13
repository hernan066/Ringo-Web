import "./auth.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import api from "../../api/api";

const SignupSchema = Yup.object().shape({
  correo: Yup.string().required("Requerido"),
  password: Yup.string().min(6, "6 caracteres minimo").required("Requerido"),
});

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (values) => {
    setIsLoading(true);
    const { correo, password } = values;
    const { data } = await api.post("/auth/login", {
      correo,
      password,
    });

    console.log(data);

    if (data?.token) {
      dispatch(
        login({
          nombre: data.usuario.nombre,
          correo: data.usuario.correo,
          jwt: data.token,
        })
      );

      setError(false);
      //console.log("Registro exitoso");
      navigate("/");
    } else {
      setError(true);
      //console.log("Error en el registro");
    }

    setIsLoading(false);
  };
  return (
    <main className="auth__container">
      <section className="auth__form">
        <div className="auth__form__container">
          <h2 className="title">Ingresa</h2>
          {error && (
            <p className="login__error">
              Error en el login, intentelo nuevamente
            </p>
          )}
          <Formik
            initialValues={{
              correo: "",
              password: "",
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
                  type="email"
                  name="correo"
                  placeholder="Ingresa tu email"
                />

                <ErrorMessage
                  name="correo"
                  component="p"
                  className="login__error"
                />

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
            <p>No tienes cuenta?</p>{" "}
            <Link to="/usuario/register">Registrate</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
