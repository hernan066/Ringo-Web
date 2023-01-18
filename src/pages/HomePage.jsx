import { useGetOfertsQuery } from "../api/productApi";
import { Banner } from "../components/banner/Banner";
import { Layout } from "../components/layout/Layout";
import Loading from "../components/loading/Loading";
import { Slider } from "../components/slider/Slider";

export const HomePage = () => {
  const { data, isLoading } = useGetOfertsQuery();
  // console.log(data);
  const oferts = data?.data?.oferts.filter((ofert) => ofert.visible);

  return (
    <div>
      <Layout>
        <Banner />
        {oferts ? <Slider oferts={oferts} /> : <Loading />}
      </Layout>
    </div>
  );
};
