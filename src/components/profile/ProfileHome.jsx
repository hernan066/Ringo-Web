/* eslint-disable jsx-a11y/anchor-is-valid */
import "./profile.css";

export const ProfileHome = ({ user, setMenu }) => {
  return (
    <article className="profile__main__right">
      <h3>MIS DATOS</h3>
      <div className="profile__main__right__container">
        <div className="profile__main__right__avatar">
          <img src={user.avatar} alt="avatar" />
        </div>

        <div className="profile__main__right__info">
          <h4>Información de Contacto</h4>
          <p>
            {user.name} {user.lastName}
          </p>
          <p>{user.email}</p>
          <div className="profile__main__right__action">
            <a onClick={() => setMenu("changePassword")}>
              <i className="bx bx-edit"></i>Cambiar contraseña
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
