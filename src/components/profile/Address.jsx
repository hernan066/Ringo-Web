import "./profile.css";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { useDeleteClientAddressMutation } from "../../api/clientAddressApi";
import { useEffect } from "react";

export const Address = ({ user, userAddress, setMenu, setAddress }) => {
  
  const [deleteClientAddress, { isError, isSuccess }] = useDeleteClientAddressMutation();

  const handlerDelete = (id) => {

    //console.log(id)
  
   Swal.fire({
      title: "Deseas borrar esta dirección?",
      text: "Este cambio no se puede revertir",
      icon: "danger",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(id)
        await deleteClientAddress(id).unwrap();
      }
    });
  };

  useEffect(() => {
    if (isError)
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error, dirección no borrado",
        showConfirmButton: false,
        timer: 2500,
      });
  }, [isError]);
  useEffect(() => {
    if (isSuccess)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Dirección borrado con éxito",
        showConfirmButton: false,
        timer: 2500,
      });
  }, [isSuccess]);


  return (
    <article className="profile__main__right">
      {userAddress.length > 1 ? (
        <h3>DIRECCIONES DE ENVÍO</h3>
      ) : (
        <h3>DIRECCIÓN DE ENVÍO</h3>
      )}
      {
        userAddress.length === 0 &&<p>No hay una dirección guardada todavía.</p>
      }
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
            <div className="profile__main__right__action-btn" onClick={()=>handlerDelete(item._id)}>
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
