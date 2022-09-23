import { Banner } from "../components/banner/Banner";
import { Layout } from "../components/layout/Layout";
import { Product } from "../components/product/Product";

export const HomePage = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <Product />
      </Layout>
    </div>
  );
};
