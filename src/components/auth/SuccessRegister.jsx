import { Link } from "react-router-dom"


export const SuccessRegister = () => {
  return (
    <div className="success__container">
        <div className="success__message">
            <h2>Se ha registrado con éxito</h2>
            <p>Se completo el registro correctamente, se ha enviado un email a su correo, con un enlace, para confirmar al mismo y luego puede iniciar sesión</p>
            <Link to="/usuario/login">Ir a iniciar a sesión</Link>
        </div>
    </div>
  )
}
