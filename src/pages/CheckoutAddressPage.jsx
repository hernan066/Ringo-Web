import { useSelector } from "react-redux";
import { useGetUserAddressQuery } from "../api/clientAddressApi";
import { useGetUserQuery } from "../api/userApi";
import { CheckoutForm } from "../components/checkout/CheckoutForm";
import { Layout } from "../components/layout/Layout";
import Loading from "../components/loading/Loading";

export const CheckoutAddressPage = () => {
  const { user: id } = useSelector((store) => store.authPage);
  const { data: address, isLoading: l1 } = useGetUserAddressQuery(id);
  const { data: user, isLoading: l2 } = useGetUserQuery(id);
  console.log(user)

  return (
    <Layout>
      {(l1 || l2) && <Loading />}
      {address && user && (
        <CheckoutForm
          address={address.data.clientAddress}
          user={user.data.user}
        />
      )}
    </Layout>
  );
};
