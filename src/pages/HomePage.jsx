import { Banner } from "../components/banner/Banner";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Product } from "../components/product/Product";

export const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Product />
        <Footer />
    </div>
  )
 ;
};
