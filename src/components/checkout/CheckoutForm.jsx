import { NewAddress } from "./address/NewAddress";
import { NewPhone } from "./address/NewPhone";
import { SelectAddress } from "./address/SelectAddress";
import "./checkout.css";

export const CheckoutForm = ({ address, user }) => {
  return (
    <main className="checkout__container">
      <div className="card__nav" style={{ textAlign: "left" }}>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Mi carrito {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Datos de envio {">"}{" "}
        </span>
        <span style={{ color: "#aaa" }}>Resumen compra {">"} </span>
        <span style={{ color: "#aaa" }}>Finaliza compra</span>
      </div>
      <div className="checkout__container__flex">
        <h1>Datos de envio</h1>
        <div className="checkout__flex">
           {address.length === 0 && <NewAddress user={user} />}
          {address.length >= 1 && !user.phone && <NewPhone address={address} user={user} />} 
          {address.length >= 1 && <SelectAddress address={address} user={user} />} 
         
        </div>
      </div>
    </main>
  );
};
