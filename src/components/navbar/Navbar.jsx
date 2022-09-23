import "./navbar.css";
import { BsCart3 } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';

export const Navbar = () => {
  return (
    <header className="navbar__container">
      <div>
        <button><FiMenu /></button>
      </div>
      <div className="navbar__logo">
        <img src="/images/logos/logo.png" alt="logo" />
      </div>
      <div>
        <button><BsCart3 /></button>
      </div>
    </header>
  );
};
