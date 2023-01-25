import { Link } from "react-router-dom";
import "./finish.css";
export const Finish = () => {
  return (
    <main
      className="cartFull__container"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1.2 },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="card__nav" style={{ textAlign: "left" }}>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Mi carrito {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Datos de envío {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Resumen compra {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Finaliza compra
        </span>
      </div>

      <h1>Compra finalizada</h1>

      <section className="finish__msg__container">
        <div className="finish__msg-box">
          <h3>Muchas gracias por su compra!!</h3>
          <p>
            Sus productos llegaran en las próximas 24hs hábiles, a la dirección
            que nos proporciono. Puede consultar el estado de su orden dentro de
            su perfil.
          </p>
          <Link to={'/'}>Volver a la pagina principal</Link>
        </div>
      </section>
    </main>
  );
};
