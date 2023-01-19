/* eslint-disable jsx-a11y/anchor-is-valid */
import { BiEdit } from "react-icons/bi";
import AvatarUpload from "./AvatarUpload";
import "./profile.css";

export const ProfileHome = ({ user, setMenu }) => {
  return (
    <article className="profile__main__right">
      <h3>MIS DATOS</h3>
      <div className="profile__main__right__container">
        {/* <div className="profile__main__right__avatar">
          <img src={user.avatar} alt="avatar" />
        </div> */}
        <AvatarUpload user={user} />

        <div className="profile__main__right__info">
          <h4>Información de Contacto</h4>
          <p>
            {user.name} {user.lastName}
          </p>
          <p>{user.email}</p>
          {user.phone && <p>Teléfono: {user.phone}</p>}

          <div className="profile__main__right__action">
            <div
              className="profile__main__right__action-btn"
              onClick={() => setMenu("rename")}
            >
              <BiEdit />
              Cambiar datos
            </div>
            {!user.google && (
              <div
                className="profile__main__right__action-btn"
                onClick={() => setMenu("changePassword")}
              >
                <BiEdit />
                Cambiar contraseña
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
