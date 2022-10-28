import "./checkout.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWhatsappUserAddress, } from "../../redux/userSlice";

const SignupSchema = Yup.object().shape({
  telefono: Yup.string().required("Requerido"),
  nombre: Yup.string().required("Requerido"),
  direccion: Yup.string().required("Requerido"),
  piso: Yup.string(),
  dpto: Yup.string(),
});

export const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {telefono} = useSelector((state) => state.user.whatsappUser);

 

  const handleSubmit = async (values) => {
   
    dispatch(getWhatsappUserAddress(values))
    navigate('/checkout/confirmar')
  };

  return (
    <main className="auth__container">
      <section className="auth__form">
        <div className="auth__form__container">
          <h2 className="title">Ingresa los datos de envio</h2>
          
          <Formik
            initialValues={{
                telefono: telefono, 
                nombre: '', 
                direccion:'', 
                piso: '', 
                dpto:''
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
          >
            {() => (
              <Form>
                <Field
                  type="text"
                  name="telefono"
                  value={telefono}
                  disable="true"
                
                />

                <ErrorMessage
                  name="telefono"
                  component="p"
                  className="login__error"
                />

                <Field
                  type="text"
                  name="nombre"
                  placeholder="Ingresa tu nombre completo"
                />
                <ErrorMessage
                  name="nombre"
                  component="p"
                  className="login__error"
                />
                <Field
                  type="text"
                  name="direccion"
                  placeholder="Ingresa la dirección de envío"
                />
                <ErrorMessage
                  name="direccion"
                  component="p"
                  className="login__error"
                />
                <div style={{display: 'flex', gap: '10px'}}>

                <Field
                  type="text"
                  name="piso"
                  placeholder="Piso(opcional)"
                />
                <ErrorMessage
                  name="piso"
                  component="p"
                  className="login__error"
                />
                <Field
                  type="text"
                  name="dpto"
                  placeholder="Departamento(opcional)"
                />
                <ErrorMessage
                  name="dpto"
                  component="p"
                  className="login__error"
                />
                </div>

                <button type="submit">
                  <span className="button__text">Enviar</span>
                </button>
              </Form>
            )}
          </Formik>
          <div className="auth__link">
           
          </div>
        </div>
      </section>
    </main>
  );
};
