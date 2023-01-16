import "./cartFull.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/cartSlice";


export const CartFull = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  console.log(products)

  const handlerDelete = (id_pro, cantidad, subTotal) => {
    dispatch(
      deleteProduct({
        id_pro,
        cantidad,
        subTotal
      })
    );
  };

  return (
    <main
      className="cartFull__container"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1.2 },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="card__nav" style={{ textAlign: "left" }}>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Mi carrito {">"}{" "}
        </span>
        <span style={{ color: "#aaa" }}>Datos de envio {">"} </span>
        <span style={{ color: "#aaa" }}>Resumen compra {">"} </span>
        <span style={{ color: "#aaa" }}>Finaliza compra</span>
      </div>

      <h1>MI Carrito</h1>

      {products.length === 0 ? (
        <div className="cartFull__vacio">
          <h2>Tu carrito se encuentra vacio</h2>
          <Link to={"/productos"}>
            <i class="fa-solid fa-arrow-left-long"></i> Volver a productos
          </Link>
        </div>
      ) : (
        <section className="car__products__container">
          <div className="cartFull__products">
            {products.map((item) => {
              return (
                <div className="cartFull__product" key={item.id}>
                  <div className="cartFull__img_container">
                    <img src={item.product.img} alt="remera" />
                  </div>
                  <div className="cartFull__info_product">
                    <div className="cartFull__info_nombre">
                      <h3>Producto</h3>
                      <p>
                        {item.product.name}
                      </p>
                    </div>
                    <div className="cartFull__info_precio">
                      <h3>Precio</h3>
                      <p>${item.totalPrice}</p>
                    </div>
                    <div className="cartFull__info_cantidad">
                      <h3>Cant.</h3>
                      <p>{item.totalQuantity}</p>
                    </div>
                    <div className="cartFull__info_borrar">
                      <h3>Borrar</h3>
                      <p
                        onClick={() =>
                          handlerDelete(item.id_pro, item.cantidad, item.subTotal)
                        }
                      >
                        <i class="fa-solid fa-x"></i>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order__detalle card">
            <h3>Resumen de compra</h3>

            <div className="order__producto card">
              <h5>Subtotal</h5>
              <h5>$1000</h5>
            </div>
            <div className="order__producto card">
              <h4>Envio</h4>
              <h4>$800.00</h4>
            </div> 
            <div className="order__producto card total">
              <h4>Total</h4>
              <h4>$1000</h4>
            </div>

            <button
              className="cartFull__btn-add"
              onClick={() => navigate("/checkout/datos-envio")}
            >
              Comprar
            </button>
          </div>
        </section>
      )}
    </main>
  );
};