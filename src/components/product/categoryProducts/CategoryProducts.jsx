import { useParams } from "react-router-dom";
import { ProductCard } from "../ProductCard";
import { ProductCardMobile } from "../ProductCardMobile";
import "./categoryProducts.css";

export const CategoryProducts = ({ products, categories }) => {
  const { category: categoryName } = useParams();
  const [filterCategory] = categories.filter(
    (category) => category.name === categoryName
  );
  const filterProducts = products.filter(
    (item) => item.product.category === filterCategory._id
  );
  console.log(filterCategory);
  console.log(filterProducts);
  return (
    <section className="categoryProducts__container">
      <h2>{categoryName}</h2>
      <div className="categoryProducts__products">
        {filterProducts.map((product) => (
          <div className="categoryProducts__product">
            <ProductCard product={product} />
          </div>
        ))}
      </div>  
      <div className="categoryProducts__container-mobile">
      {filterProducts.map((product) => (
         
            <ProductCardMobile product={product} />
         
        ))}
      </div>
    </section>
  );
};
