import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAddress } from "../../../redux/cartSlice";

export const SelectAddress = ({ address: addresses, user }) => {
  const [select, setSelect] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const  handlerNext = ()=>{
  dispatch(addAddress({
    
    name: user.name,
    lastName: user.lastName,
    phone: user.phone,
    address: addresses[select].address,
    flor: addresses[select].flor,
    department: addresses[select].department,
    province: addresses[select].province,
    city: addresses[select].city,
    zip: addresses[select].zip,
    type: addresses[select].type,
    deliveryZone: addresses[select]?.deliveryZone._id || null,
    tax: addresses[select]?.deliveryZone.cost || 0,
   
  }))
  navigate('/checkout/resumen')
 }
  return (
    <section className="checkout__container__address">
      <h3>Selecciona la dirección de envío</h3>
      {addresses.map((item, idx) => (
        <div className="checkout__address">
          <div>
            <p>
              Dirección: {item.address} {item.flor && `, Piso ${item.flor}`}{" "}
              {item.department && `, Departamento ${item.department}`}
            </p>
            <p>
              {item.province}, {item.city}, Cp {item.zip}
            </p>
            <p>Teléfono: {user.phone}</p>
            <p>Tipo de dirección: {item.type}</p>
          </div>
          <div>
            <input type="radio" name="selectAddress" id="" value={idx} checked={select === idx} onChange={()=>setSelect(idx)}/>
          </div>
        </div>
      ))}

      <button className={`btn-load `} onClick={handlerNext}>
        <span className="button__text">Continuar</span>
      </button>
    </section>
  );
};
