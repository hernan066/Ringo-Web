import { useEffect, useState } from "react";
import api from "../../api/api";
import { Product } from "./Product";
import "./product.css";

const Products = () => {
  const [visibleOferts, setVisibleOferts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api("/oferts");
      const oferts = data.data.oferts.filter((ofert) => ofert.visible);
      setVisibleOferts(oferts);
      console.log(oferts);
    };
    getProducts();
  }, []);

  return (
    <section className="products__section">
      <h2>Ofertas</h2>
      <div className="products__container">
        {visibleOferts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
