import logo from "../assets/img/logo.png"
import { Link } from 'react-router-dom';
import { ButtonTop } from "./Button";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo da Saufid Suplementos" /></Link>
          <div className="text-logo">
            <p id="logo-text-one">Saufid</p>
            <p id="logo-text-two">Suplementos</p>
          </div>
        </div>
        <Navbar />
        <div>
          <ButtonTop text="Comprar agora" />
        </div>
      </header>
    </>
  );
}