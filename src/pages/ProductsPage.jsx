import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

import Products from "../components/product/Products";
import { getWhatsappUser } from "../redux/userSlice";

export const ProductsPage = () => {
  let { telefono, id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const savePhoneNumber = () => {
      if (telefono && id) {
        dispatch(
          getWhatsappUser({
            id,
            telefono,
          })
        );
      }
    };
    savePhoneNumber();
  }, []);

  return (
    <div>
      <Layout>
        <Products />
      </Layout>
    </div>
  );
};
