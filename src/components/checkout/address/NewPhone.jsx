export const NewPhone = ({ address }) => {
    return (
      <section className="checkout__container__address">
        <h3>Selecciona la dirección de envío</h3>
  
        <div className="checkout__address">
          <div className="input__container">
            <label htmlFor="">Telefono de contacto</label>
            <div style={{ display: "flex" }}>
              <div className="checkout__prefix">+54</div>
              <input type="text" name="phone" placeholder="Teléfono" />
            </div>
            <div name="phone" component="p" className="profile__error" />
          </div>
        </div>
        <div className="checkout__address">
          <div>
            <p>Dirección: Calle 123</p>
            <p>Santa Fe, Rosario, Cp 2000</p>
            <p>Teléfono: 5423568974</p>
            <p>Tipo de dirección: Casa</p>
          </div>
          <div>
            <input type="radio" name="selectAddress" id="" />
          </div>
        </div>
        <div className="checkout__address">
          <div>
            <p>Dirección: Calle 123</p>
            <p>Santa Fe, Rosario, Cp 2000</p>
            <p>Teléfono: 5423568974</p>
            <p>Tipo de dirección: Negocio</p>
          </div>
          <div>
            <input type="radio" name="selectAddress" id="" />
          </div>
        </div>
        <button className={`btn-load `} type="submit">
          <span className="button__text">Continuar</span>
        </button>
      </section>
    );
  };
  