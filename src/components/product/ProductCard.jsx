import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/productos/detalle/${product._id}`} className="box-wrapper">
      <div className="ofert_tag">Oferta</div>
      <img src={product.product.img} alt="pollo" />
      <div className="box-content">
        <div className="buy">
          <span>
            <i className="fa fa-cart-plus"></i>
          </span>
        </div>
        <div className="title">{product.product.name}</div>
        <div className="desc">{product.description}</div>
        <span className="price">${product.prices[0].price1}</span>
      </div>
    </Link>
  );
};
