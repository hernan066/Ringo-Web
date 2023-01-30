import React from "react";
import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../api/categoryApi";
import { useGetOfertsQuery } from "../api/productApi";
import { Layout } from "../components/layout/Layout";
import Loading from "../components/loading/Loading";
import { CategoryProducts } from "../components/product/categoryProducts/CategoryProducts";
import { getProducts } from "../redux/productsSlice";

export const CategoryProductsPage = () => {
  const { data: dataOferts } = useGetOfertsQuery();
  const { data: dataCategories } = useGetCategoriesQuery();
  const dispatch = useDispatch();
  console.log(dataCategories);
  const oferts = dataOferts?.data?.oferts.filter((ofert) => ofert.visible);
  if (oferts) {
    dispatch(getProducts(oferts));
  }
  return (
    <div>
      <Layout>
        {oferts && dataCategories ? (
          <CategoryProducts products={oferts} categories = {dataCategories.categories} />
        ) : (
          <Loading />
        )}
      </Layout>
    </div>
  );
};
