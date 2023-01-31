import { Link } from "react-router-dom";
import "./category.css";

export const Category = () => {
  return (
    <section className="category__section">
      <h2>Categorias</h2>
      <div className="category__container">
        <div className="category__card">
          <Link to={"/productos/pollo"}>
            <h3>POLLO</h3>
            <img
              src="https://ik.imagekit.io/mrprwema7/category/cat6_HgGti8wPb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675101772265"
              alt=""
            />
          </Link>
        </div>
        <div className="category__card">
          <Link to={"/productos/congelados"}>
            <h3>CONGELADOS</h3>
            <img
              src="https://ik.imagekit.io/mrprwema7/category/Proyecto_nuevo_38jH9O-aI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675101771827"
              alt=""
            />
          </Link>
        </div>
        <div className="category__card">
          <Link to={"/productos/secos"}>
            <h3>SECOS</h3>
            <img
              src="https://ik.imagekit.io/mrprwema7/category/cat4_X2qqRMhTq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675101771877"
              alt=""
            />
          </Link>
        </div>
        <div className="category__card">
          <Link to={"/productos/huevos"}>
            <h3>HUEVOS</h3>
            <img
              src="https://ik.imagekit.io/mrprwema7/category/cat3__1___CGm8CNke.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675101772246"
              alt=""
            />
          </Link>
        </div>
        <div className="category__card">
          <Link to={"/productos/embutidos"}>
            <h3>EMBUTIDOS</h3>
            <img
              src="https://ik.imagekit.io/mrprwema7/category/cat2__1__Ed4fkQgYy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675101771971"
              alt=""
            />
          </Link>
        </div>
        <div className="category__card">
          <Link to={"/productos/cerdo"}>
            <h3>CERDO</h3>
            <img
              src="https://ik.imagekit.io/mrprwema7/category/cat1_qT7i3vq_Z.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675101772404"
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
