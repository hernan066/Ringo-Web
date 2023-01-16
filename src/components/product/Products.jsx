import Loading from "../loading/Loading";
import "./product.css";
import { ProductCard } from "./ProductCard";

const Products = ({ oferts, isLoading }) => {
  return (
    <section className="products__section">
      <h2>Ofertas</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="products__container">
          {oferts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Products;
