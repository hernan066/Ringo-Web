import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./profile.css";
import { regex } from "../../utils/regex";
import {usePostClientAddressMutation, usePutClientAddressMutation} from "../../api/clientAddressApi";
import { useDispatch } from "react-redux";
import { setMenu } from "../../redux/uiSlice";

const { lettersNumbersAndSpaces } = regex;

const SignupSchema = Yup.object().shape({
  address: Yup.string()
    .matches(lettersNumbersAndSpaces, "Solo letras y números")
    .required("Requerido"),
  flor: Yup.string().matches(lettersNumbersAndSpaces, "Solo letras y números"),
  department: Yup.string().matches(
    lettersNumbersAndSpaces,
    "Solo letras y números"
  ),
  province: Yup.string()
    .matches(lettersNumbersAndSpaces, "Solo letras y números")
    .required("Requerido"),
  city: Yup.string()
    .matches(lettersNumbersAndSpaces, "Solo letras y números")
    .required("Requerido"),
  type: Yup.string()
    .matches(lettersNumbersAndSpaces, "Solo letras y números")
    .required("Requerido"),
  zip: Yup.number().required("Requerido"),
});

export const UpdateAddress = ({  address }) => {
  const id = address._id
  const dispatch = useDispatch();
  const [editUser, { isLoading, isError }] = usePutClientAddressMutation();

  console.log(address)

  const handleSubmit = async (values) => {
    try {
      const data = {
        ...values,
        user: address.user,
      };
      const res = await editUser({id, ...data}).unwrap();
      if (res) {
       dispatch(setMenu("address")) ;
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
      <h3>Editar dirección</h3>
      <div className="profile__main__right__info__rename">
        <div className="profile__change-password">
          <h4>Ingresa dirección de envío</h4>
          <Formik
            initialValues={{
              address: address.address,
              flor: address.flor,
              department: address.department,
              province: address.province,
              city: address.city,
              type: address.type,
              zip: address.zip,
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
                    focus="true"
                    type="text"
                    name="address"
                    placeholder="Dirección"
                  />

                  <ErrorMessage
                    name="address"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <Field
                    type="text"
                    name="flor"
                    placeholder="Piso (opcional)"
                  />

                  <ErrorMessage
                    name="department"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <Field
                    type="text"
                    name="department"
                    placeholder="Departamento (opcional)"
                  />

                  <ErrorMessage
                    name="department"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <Field type="text" name="province" placeholder="Provincia" />

                  <ErrorMessage
                    name="province"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <Field type="text" name="city" placeholder="Ciudad" />

                  <ErrorMessage
                    name="city"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <Field type="number" name="zip" placeholder="Código postal" />

                  <ErrorMessage
                    name="zip"
                    component="p"
                    className="profile__error"
                  />
                </div>
                <div className="input__container">
                  <Field as="select" name="type">
                  <option value="" disable="true">
                      Tipo de dirección
                    </option>
                    <option value="casa">Casa</option>
                    <option value="negocio">Negocio</option>
                  </Field>

                  <ErrorMessage
                    name="type"
                    component="p"
                    className="profile__error"
                  />
                </div>

                <button
                  className={`btn-load ${isLoading ? "button--loading" : ""}`}
                  type="submit"
                  disabled={isLoading}
                >
                  <span className="button__text">Editar</span>
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
