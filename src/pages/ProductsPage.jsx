import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

import Products from "../components/product/Products";
import { getPhoneNumber } from "../redux/userSlice";

export const ProductsPage = () => {
  let { telefono } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const savePhoneNumber = () => {
      if (telefono) {
        dispatch(getPhoneNumber(telefono));
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
