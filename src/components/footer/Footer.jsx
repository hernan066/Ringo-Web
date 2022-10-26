/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container" id='footer__container'>
        <div className="row">
            <div className="footer-col">
                <h4>La empresa</h4>
                <ul>
                    <li><a href="#">Acerca de nosotros</a></li>
                    <li><a href="#">Nuestros Servicios</a></li>
                    <li><a href="#">Politicas de privacidad</a></li>
                    
                </ul>
            </div>
            <div className="footer-col">
                <h4>Ayuda</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Envios</a></li>
                  
                    <li><a href="#">Opciones de pago</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Compras online</h4>
                <ul>
                    <li><a href="#">Cajon de Pollo</a></li>
                    <li><a href="#">Pechuga de pollo</a></li>
                    <li><a href="#">Cuarto trasero</a></li>
                   
                </ul>
            </div>
            <div className="footer-col">
                <h4>Redes</h4>
                <div className="social-links">
                    <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
  );
};
