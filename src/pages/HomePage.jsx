import { useDispatch } from "react-redux";
import { useGetOfertsQuery } from "../api/productApi";
import { Banner } from "../components/banner/Banner";
import { Category } from "../components/category/Category";
import { Layout } from "../components/layout/Layout";
import Loading from "../components/loading/Loading";
import { Slider } from "../components/slider/Slider";
import { getProducts } from "../redux/productsSlice";

export const HomePage = () => {
  const { data } = useGetOfertsQuery();
  const dispatch = useDispatch();

  const oferts = data?.data?.oferts.filter((ofert) => ofert.visible);
  if (oferts) {
    dispatch(getProducts(oferts));
  }

  return (
    <div>
      <Layout>
        <Banner />
        {oferts ? <Slider oferts={oferts} /> : <Loading />}
        <Category />
      </Layout>
    </div>
  );
};
