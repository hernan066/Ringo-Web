import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { usePutUserChangePasswordMutation } from "../../api/userApi";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./profile.css";
import { useState } from "react";
import { setMenu } from "../../redux/uiSlice";

const SignupSchema = Yup.object().shape({
  password: Yup.string().min(6, "6 caracteres mínimo").required("Requerido"),
  newPassword: Yup.string().min(6, "6 caracteres mínimo").required("Requerido"),
  newPassword2: Yup.string()
    .min(6, "6 caracteres mínimo")
    .required("Requerido")
    .oneOf([Yup.ref("newPassword")], "Las contraseñas deben ser iguales"),
});

export const ChangePassword = () => {
  const dispatch = useDispatch();
  const { user: id } = useSelector((store) => store.authPage);
  const [editUser, { isLoading, isError }] =
    usePutUserChangePasswordMutation(id);
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      const res = await editUser({ id, ...values }).unwrap();
      if (res) {
       dispatch(setMenu("main")) ;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Contraseña cambiada con éxito",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        setError(error.data.msg);
      }
    }
  };

  return (
    <article className="profile__main__right">
      <h3>Cambiar contraseña</h3>
      <div className="profile__main__right__info__rename">
        <div className="profile__change-password">
          <h4>Ingresa tu nueva contraseña</h4>
          <Formik
            initialValues={{
              password: "",
              newPassword: "",
              newPassword2: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <div className="input__container">
                  <Field
                    focus
                    type="password"
                    name="password"
                    placeholder="Ingresa tu password actual"
                  />

                  <ErrorMessage
                    name="password"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <Field
                    type="password"
                    name="newPassword"
                    placeholder="Ingresa tu nuevo password"
                  />

                  <ErrorMessage
                    name="newPassword"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <Field
                    type="password"
                    name="newPassword2"
                    placeholder="Repite tu nuevo password"
                  />
                  <ErrorMessage
                    name="newPassword2"
                    component="p"
                    className="profile__error"
                  />
                </div>

                <button
                  className={`btn-load ${isLoading ? "button--loading" : ""}`}
                  type="submit"
                  disabled={isLoading}
                >
                  <span className="button__text">Cambiar</span>
                </button>
                {isError && (
                  <p className="form__error">
                    ❌Error, tu password no se ha cambiado
                  </p>
                )}
                {error && <p className="form__error">{error}</p>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </article>
  );
};
