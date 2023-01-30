import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

export const ProductCardMobile = ({ product }) => {
  return (
    <Link
      to={`/productos/detalle/${product._id}`}
      className="productCardMobile__container"
    >
   
      <div className="productCardMobile__img">
        <img src={product.product.img} alt="pollo" />
      </div>
      <div className="productCardMobile__info">
        <div className="title">{product.product.name}</div>
        <div className="desc">{product.description}</div>
        <span className="price">{formatPrice(product.prices[0].price1)}</span>
      </div>
    </Link>
  );
};
