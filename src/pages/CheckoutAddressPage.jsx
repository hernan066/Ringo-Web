import { useSelector } from "react-redux";
import { useGetUserAddressQuery } from "../api/clientAddressApi";
import { CheckoutForm } from "../components/checkout/CheckoutForm";
import { Layout } from "../components/layout/Layout";
import Loading from "../components/loading/Loading";


export const CheckoutAddressPage = () => {
  const { user: id } = useSelector((store) => store.authPage);
  const { data, isLoading } = useGetUserAddressQuery(id)
  console.log(data)
  return (
    <Layout>
      {isLoading && <Loading />}
      {data && <CheckoutForm address={data.data.clientAddress}/>}
    </Layout>
  );
};
