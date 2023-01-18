import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { usePutUserMutation } from "../../api/userApi";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./profile.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Requerido"),
  lastName: Yup.string().required("Requerido"),
  phone: Yup.string().required("Requerido"),
  
});

export const Rename = ({ setMenu, user }) => {
  const { user: id } = useSelector((store) => store.authPage);
  const [editUser, { isLoading, isError }] = usePutUserMutation(id);

  const prefix = user.phone.split("").splice(0, 2).join("");
  let editPhone;
  if (prefix === "54") {
    editPhone = user.phone.slice(2);
  } else {
    editPhone = user.phone;
  }

  const handleSubmit = async (values) => {
    try {
      const data = {
        ...values,
        phone: `54${values.phone}`,
      };
      const res = await editUser({ id, ...data }).unwrap();
      if (res) {
        setMenu("main");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Datos cambiados con éxito",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="profile__main__right">
      <h3>Cambiar datos</h3>
      <div className="profile__main__right__info__rename">
        <div className="profile__change-password">
          <h4>Ingresa tu nuevos datos</h4>
          <Formik
            initialValues={{
              name: user.name,
              lastName: user.lastName,
              phone: editPhone,
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
                    type="text"
                    name="name"
                    placeholder="Ingresa tu nombre"
                  />

                  <ErrorMessage
                    name="name"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Ingresa tu apellido"
                  />

                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <div style={{ display: "flex" }}>
                    <div className="rename__prefix">+54</div>
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Ingresa tu telefono"
                    />
                  </div>
                  <ErrorMessage
                    name="phone"
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
                    ❌Error, tu datos no se ha cambiado
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </article>
  );
};
