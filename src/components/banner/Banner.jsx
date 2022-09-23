import "./banner.css";

export const Banner = () => {
  return (
    <section className="banner__container">
      <picture class="banner__img">
        <source
          srcset="./images/logo/banner_logo.png"
          media="(max-width:700px)"
        />
        <img src="./images/banners/banner1.jpg" alt="banner 1" />
      </picture>
      <h1>EL MERJOR <br/> POLLO</h1>
      <div className="banner__dots__container">

      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      <span className="banner__dots">.</span>
      </div  >
      <p className="banner__text">Las mejores marcas de pollo desde el campo a tu casa.</p>
    </section>
  );
};
