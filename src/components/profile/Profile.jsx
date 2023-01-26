import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useGetUserAddressQuery } from "../../api/clientAddressApi";
import { useGetUserOrderQuery } from "../../api/orderApi";
import { useGetUserQuery } from "../../api/userApi";
import { logOut } from "../../redux/authSlice";
import { setMenu } from "../../redux/uiSlice";
import Loading from "../loading/Loading";
import { AddAddress } from "./AddAddress";
import { Address } from "./Address";
import { ChangePassword } from "./ChangePassword";
import { Orders } from "./Orders";
import "./profile.css";
import { ProfileHome } from "./ProfileHome";
import { Rename } from "./Rename";
import { UpdateAddress } from "./UpdateAddress";

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { menu } = useSelector((store) => store.ui);
  const { user: id } = useSelector((store) => store.authPage);
  const { data: userData } = useGetUserQuery(id);
  const { data: userAddressData } = useGetUserAddressQuery(id);
  const { data: orderData } = useGetUserOrderQuery(id);
  const [address, setAddress] = useState(null);

  const user = userData?.data?.user;
  const userAddress = userAddressData?.data?.clientAddress;
  console.log(orderData);

  if (!userData || !userAddressData || !orderData) {
    return <Loading />;
  }

  const handlerLogout = async () => {
    try {
      const res = await axios.get("/auth/logout2", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(logOut());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
                    (menu === "main" ||
                      menu === "changePassword" ||
                      menu === "rename") &&
                    "active"
                  }`}
                  onClick={() => dispatch(setMenu("main"))}
                >
                  <i className="bx bx-list-ul"></i> Mis datos
                </div>
              </li>
              <li>
                <div
                  className={`menu_profile ${
                    (menu === "address" ||
                      menu === "addAddress" ||
                      menu === "updateAddress") &&
                    "active"
                  }`}
                  onClick={() => dispatch(setMenu("address"))}
                >
                  <i className="bx bx-list-ul"></i> Mi dirección
                </div>
              </li>
              <li>
                <div
                  className={`menu_profile ${menu === "orders" && "active"}`}
                  onClick={() => dispatch(setMenu("orders"))}
                >
                  <i className="bx bx-list-ul"></i> Mis pedidos
                </div>
              </li>

              <li>
                <div className="menu_profile" onClick={handlerLogout}>
                  <i className="bx bx-exit"></i> Cerrar sesión
                </div>
              </li>
            </ul>
          </article>

          {menu === "main" && <ProfileHome user={user} />}
          {menu === "changePassword" && <ChangePassword user={user} />}
          {menu === "rename" && <Rename user={user} />}
          {menu === "address" && (
            <Address
              user={user}
              userAddress={userAddress}
              setAddress={setAddress}
            />
          )}
          {menu === "addAddress" && (
            <AddAddress user={user} userAddress={userAddress} />
          )}
          {menu === "updateAddress" && (
            <UpdateAddress
              user={user}
              userAddress={userAddress}
              address={address}
            />
          )}
          {menu === "orders" && (
            <Orders user={user} orderData={orderData.data.order} />
          )}
        </div>
      </section>
    </main>
  );
};
