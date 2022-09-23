import { Banner } from "../components/banner/Banner";
import { Layout } from "../components/layout/Layout";

import Products from "../components/product/Products";

export const HomePage = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <Products />
      </Layout>
    </div>
  );
};
