import { Link } from "react-router-dom";
import logo from "../assets/logo-icon.svg";

function Header() {
  return (
    <header className="header glass">
      <div className="brand">
        <img src={logo} alt="Dermacheck" className="logo-small" />
        <span className="brand-name">Dermacheck</span>
      </div>

      <nav className="nav">
        <Link to="/">Inicio</Link>
      </nav>
    </header>
  );
}

export default Header;

