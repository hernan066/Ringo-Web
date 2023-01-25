import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { regex } from "../../../utils/regex";
import "../checkout.css";
import { addAddress } from "../../../redux/cartSlice";

const { lettersNumbersAndSpaces, onlyNumbers } = regex;

const SignupSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(onlyNumbers, "Solo números")
    .required("Requerido"),
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

export const NewAddress = ({ address, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(addAddress({
        ...values,
        phone: `54${values.phone}`,
        name: user.name,
        lastName: user.lastName,
    }))
    navigate('/checkout/resumen')
  };

  return (
    <section className="checkout__container__form">
              <div className="checkout__container__wrapper">
                <Formik
                  initialValues={{
                    phone: user.phone || '',
                    address: "",
                    flor: "",
                    department: "",
                    province: "",
                    city: "",
                    zip: undefined,
                    type: '',
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values, { resetForm }) => {
                    handleSubmit(values);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form noValidate>
                      <div className="input__container">
                        <div style={{ display: "flex" }}>
                          <div className="checkout__prefix">+54</div>
                          <Field
                            type="text"
                            name="phone"
                            placeholder="Teléfono"
                          />
                        </div>
                        <ErrorMessage
                          name="phone"
                          component="p"
                          className="checkout__error"
                        />
                      </div>
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
                          className="checkout__error"
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
                          className="checkout__error"
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
                          className="checkout__error"
                        />
                      </div>
                      <div className="input__container">
                        <Field
                          type="text"
                          name="province"
                          placeholder="Provincia"
                        />

                        <ErrorMessage
                          name="province"
                          component="p"
                          className="checkout__error"
                        />
                      </div>
                      <div className="input__container">
                        <Field type="text" name="city" placeholder="Ciudad" />

                        <ErrorMessage
                          name="city"
                          component="p"
                          className="checkout__error"
                        />
                      </div>
                      <div className="input__container">
                        <Field
                          type="number"
                          name="zip"
                          placeholder="Código postal"
                        />

                        <ErrorMessage
                          name="zip"
                          component="p"
                          className="checkout__error"
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
                          className="checkout__error"
                        />
                      </div>

                      <button className={`btn-load `} type="submit">
                        <span className="button__text">Enviar</span>
                      </button>
                    </Form>
                  )}
                </Formik>
                <div className="auth__link"></div>
              </div>
            </section>
  );
};
