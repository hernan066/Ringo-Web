import "./banner.css";

export const Banner = () => {
  return (
    <section className="banner__container">
      <picture className="banner__img">
        <source
          srcSet="./images/banners/banner_s.jpg"
          media="(max-width:650px)"
        />
        <source
          srcSet="./images/banners/banner_m.jpeg"
          media="(max-width:768px)"
        />
        <img src="./images/banners/banner1.jpg" alt="banner 1" />
      </picture>

      <div className="banner__text__container">
        <h1>
          EL MERJOR <br /> POLLO
        </h1>

        <p className="banner__text">
          Las mejores marcas de pollo desde el campo a tu casa.
        </p>
      </div>
    </section>
  );
};
