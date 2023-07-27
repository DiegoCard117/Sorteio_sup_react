import { Link } from "react-router-dom";
import { useState } from 'react'
import logo from "../assets/img/logo.png"

import menu from '../assets/img/menu-white.png'

export function Navbar() {
  
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuCliked] = useState(false)

  const updateMenu = () => {
    !isMenuClicked ? setMenuClass("menu visible") : setMenuClass("menu hidden")
    setIsMenuCliked(!isMenuClicked)
  }
  
  return (
    <>
      <nav>
        <ul className={menu_class}>
          <li className="responsivo">
            <div className="logo logo-responsivo">
              <Link to="/"><img src={ logo } alt="Logo da Saufid Suplementos" /></Link>
              <div className="text-logo text-logo-responsivo">
                <p id="logo-text-one">Saufid</p>
                <p id="logo-text-two">Suplementos</p>
              </div>
            </div>
          </li>
          <Link to="/sorteios"><li id="sort">Nossos Sorteios</li></Link>
          <span className="divi">/</span>
          <a href="#about"><li id="sobre">Sobre Nós</li></a>
          <span className="divi">/</span>
          <a href="#why"><li id="porque">Porque?</li></a>
        </ul>
      </nav>
      <div onClick={updateMenu} className="menu-responsivo">
        <img className="menu-burguer" src={ menu } alt="" />
      </div>
    </>
  )
}