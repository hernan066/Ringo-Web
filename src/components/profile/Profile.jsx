import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserAddressQuery } from "../../api/clientAddressApi";
import { useGetUserQuery } from "../../api/userApi";
import Loading from "../loading/Loading";
import { AddAddress } from "./AddAddress";
import { Address } from "./Address";
import { ChangePassword } from "./ChangePassword";
import "./profile.css";
import { ProfileHome } from "./ProfileHome";
import { Rename } from "./Rename";

export const Profile = () => {
  const [menu, setMenu] = useState("main");
  const { user: id } = useSelector((store) => store.authPage);
  const { data: userData } = useGetUserQuery(id);
  const { data: userAddressData } = useGetUserAddressQuery(id);

  const user = userData?.data?.user;
  const userAddress = userAddressData?.data?.clientAddress;
  // console.log(userData);
  // console.log(userAddressData);

  if (!userData || !userAddressData) {
    return <Loading />;
  }

  return (
    <main className="profile__main">
      <section className="profile__section">
        <h1>Mi perfil</h1>
        <div className="profile__main__container">
          <article className="profile__menu__left">
            <h3>MENU</h3>
            <ul>
              <li>
                <div
                  className={`menu_profile ${
                    (menu === "main" || menu === "changePassword" || menu === "rename") && "active"
                  }`}
                  onClick={() => setMenu("main")}
                >
                  <i className="bx bx-list-ul"></i> Mis datos
                </div>
              </li>
              <li>
                <div
                  className={`menu_profile ${(menu === "address" || menu === "addAddress" ) && "active"}`}
                  onClick={() => setMenu("address")}
                >
                  <i className="bx bx-list-ul"></i> Mi dirección
                </div>
              </li>
              <li>
                <div
                  className={`menu_profile ${menu === "orders" && "active"}`}
                  onClick={() => setMenu("orders")}
                >
                  <i className="bx bx-list-ul"></i> Mis pedidos
                </div>
              </li>

              <li>
                <div className="menu_profile">
                  <i className="bx bx-exit"></i> Cerrar sesión
                </div>
              </li>
            </ul>
          </article>

          {menu === "main" && <ProfileHome user={user} setMenu={setMenu} />}
          {menu === "changePassword" && <ChangePassword user={user} setMenu={setMenu} />}
          {menu === "rename" && <Rename user={user} setMenu={setMenu} />}
          {menu === "address" && (
            <Address user={user} userAddress={userAddress} setMenu={setMenu}/>
          )}
          {menu === "addAddress" && (
            <AddAddress user={user} userAddress={userAddress} setMenu={setMenu}/>
          )}
        </div>
      </section>
    </main>
  );
};
