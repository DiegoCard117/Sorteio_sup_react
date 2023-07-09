
import { ButtonTop } from "./Button";
import logo from "../assets/img/logo.png"
import { Link } from 'react-router-dom';

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
        <nav>
          <ul className="menu">
            <Link to="/sorteios"><li id="sort">Nossos Sorteios</li></Link>
            <li id="sobre">Sobre Nós</li>
            <li id="porque">Porque?</li>
          </ul>
        </nav>
        <div>
          <ButtonTop text="Comprar agora" />
        </div>
      </header>
    </>
  );
}