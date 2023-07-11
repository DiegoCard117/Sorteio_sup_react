import { Link } from "react-router-dom";
import { useState } from 'react'

import menu from '../assets/img/menu.svg'

export function Navbar() {

  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuCliked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked) {
      setMenuClass("menu visible")
    } else {
      setMenuClass("menu hidden")
    }
    setIsMenuCliked(!isMenuClicked)
  }

  return (
    <>
      <nav>
        <ul className={menu_class}>
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