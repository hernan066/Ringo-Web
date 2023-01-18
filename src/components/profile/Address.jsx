import "./profile.css";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

export const Address = ({ user, userAddress, setMenu, setAddress }) => {
  console.log(userAddress);

  return (
    <article className="profile__main__right">
      {userAddress.length > 1 ? (
        <h3>DIRECCIONES DE ENVÍO</h3>
      ) : (
        <h3>DIRECCIÓN DE ENVÍO</h3>
      )}
      {userAddress.map((item, idx) => (
        <div className="profile__main__right__info" key={item._id}>
          <h4>Dirección {idx + 1}</h4>
          <p>
            {item.address}
            {item.flor && `, Piso ${item.flor}`}
            {item.department && `, Departamento ${item.department}`}
          </p>
          <p>
            {item.province}, {item.city}, CP{item.zip}
          </p>

          <div className="profile__main__right__action">
            <div
              className="profile__main__right__action-btn"
              onClick={() => {
                setMenu("updateAddress");
                setAddress(item);
              }}
            >
              <BiEdit />
              Editar
            </div>
            <div className="profile__main__right__action-btn">
              <MdDeleteOutline />
              Borrar
            </div>
          </div>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="profile__address-btn"
          onClick={() => setMenu("addAddress")}
        >
          + Agregar dirección
        </button>
      </div>

      {/*   <% }else{ %>
            <p>No hay una dirección guardada todavía.</p>
            <div className="profile__main__right__action">
                <a href="/usuario/perfil/cambiar_direccion"><i className='bx bx-edit'></i>Agregar
                    dirección</a>

            </div>
            <% } %> */}
    </article>
  );
};
