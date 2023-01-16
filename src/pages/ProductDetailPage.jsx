import { useParams } from "react-router-dom";
import { useGetOfertQuery } from "../api/productApi";
import { Layout } from "../components/layout/Layout";
import Loading from "../components/loading/Loading";
import { ProductDetails } from "../components/product/detail/ProductDetails";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetOfertQuery(id);
  // console.log(data.data.ofert)
  return (
    <Layout>
      {data ? <ProductDetails ofert={data.data.ofert} /> : <Loading />}
    </Layout>
  );
};
