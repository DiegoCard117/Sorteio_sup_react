import { ButtonTop } from "./Button";
import logo from "../assets/img/logo.png"

export function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo da Saufid Suplementos" />
          <div className="text-logo">
            <p id="logo-text-one">Saufid</p>
            <p id="logo-text-two">Suplementos</p>
          </div>
        </div>
        <div>
          <ul className="menu">
            <li id="sort">Nossos Sorteios</li>
            <li id="sobre">Sobre Nós</li>
            <li id="porque">Porque?</li>
          </ul>
        </div>
        <div>
          <ButtonTop text="Comprar agora" />
        </div>
      </header>
    </>
  );
}