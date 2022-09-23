import { products } from "../../data/products";
import { Product } from "./Product";
import "./product.css";

const Products = () => {
   
  return (
    <section className="products__section">
      <h2>Ofertas</h2>
      <div className="products__container">
         {
            products.map((product) => {
                return(
                    <Product key={product.name} product={product}/>
                )
            })
        } 
      </div>
    </section>
  )
}

export default Products