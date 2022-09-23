import { BsCartPlus } from "react-icons/bs";
import "./product.css";

export const Product = () => {
  return (
    <section className="products__section">
      <h2>Ofertas</h2>
      <div className="products__container">
        <article className="card__container">
          <div>
            <h3 style={{ lineHeight: "30px" }}>CAJON DE POLLOS</h3>
            <h3>20kg</h3>
          </div>
          <div className="card__img__container">
            <img src="./images/products/pollo.png" alt="pollo" />
          </div>
          <div>
            <h3 id="card__price">$6.400</h3>
            <button className="card__btn">
              <BsCartPlus />
              Agregar
            </button>
          </div>
        </article>
        <article className="card__container">
          <div>
            <h3 style={{ lineHeight: "30px" }}>PECHUGA DE POLLO</h3>
            <h3>5kg</h3>
          </div>
          <div className="card__img__container">
            <img src="./images/products/pechugas.png" alt="pollo" />
          </div>
          <div>
            <h3 id="card__price">$3.900</h3>
            <button className="card__btn">
              <BsCartPlus />
              Agregar
            </button>
          </div>
        </article>
        <article className="card__container">
          <div>
            <h3 style={{ lineHeight: "30px" }}>CUARTO TRASERO</h3>
            <h3>10kg</h3>
          </div>
          <div className="card__img__container">
            <img src="./images/products/pata.png" alt="pollo" />
          </div>
          <div>
            <h3 id="card__price">$3.400</h3>
            <button className="card__btn">
              <BsCartPlus />
              Agregar
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
