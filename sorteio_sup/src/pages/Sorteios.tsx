import { Header } from "../components/Header"
import  girl  from '../assets/img/girl.svg'

import '../assets/css/sorteio.css'

export function Sorteios() {
  return(
    <>
      <Header/>
      <section className="top-sort">
        <div className="sort-left">
          <h1>Conheça nosso sorteio YZX nome.</h1>
          <p>Esse é nosso sorteio com maior custo beneficio e PORQUE adquirir ele?</p>
          <p>Confira abaixo quais produtos oferecermos e seus beneficios !</p>
        </div>
        <div className="sort-right">
          <img src={ girl } alt="garota fazendo exercicio"/>
        </div>
      </section>
    </>
  )
}