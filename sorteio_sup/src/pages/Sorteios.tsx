import { Header } from "../components/Header"
import  girl  from '../assets/img/girl.svg'

import '../assets/css/sorteio.css'
import { BottomSection } from "../components/BottomSection";
import { Footer } from "../components/Footer";

import Img1 from "../assets/img/img-sorteio1.png"
import Img2 from "../assets/img/img2-sorteio.png"
import Img3 from "../assets/img/img3-sorteio.png"

export function Sorteios() {
  return(
    <>
      <Header/>
      <section className="top-sort">
        <div className="sort-left">
          <h1 className="title-sorteio">Conheça nosso sorteio YZX nome.</h1>
          <p>Esse é nosso sorteio com maior custo beneficio e PORQUE adquirir ele?</p>
          <p>Confira abaixo quais produtos oferecermos e seus beneficios !</p>
        </div>
        <div className="sort-right">
          <img src={ girl } alt="garota fazendo exercicio"/>
        </div>
      </section>
          <h1 className="title-sort">Whey XX nome</h1>
      <section className="mid-page">
        <div className="mid-page-top">
          <div className="img-sort-page">
            <img src={ Img1 } alt="" />
          </div>
          <div className="text-sort-page">
            <p>Como tenho por objetivo, nesta Tese, construir uma resposta para a questão – como foi se modificando a demonstração em geometria plana elementar em livros-texto usados no ensino brasileiro a partir do século XIX – a proposta se atém ao texto demonstrativo em uma esfera específica, a do ensino-aprendizagem.</p>
          </div>
        </div>
      </section>
      <h1 className="title-sort exce title-right">Multivitamínico XX Marca</h1>
      <section className="mid-page">
        <div className="mid-page-top">
          <div className="img-sort-page">
            <img src={ Img1 } alt="" />
          </div>
          <div className="text-sort-page text-left">
            <p>Como tenho por objetivo, nesta Tese, construir uma resposta para a questão – como foi se modificando a demonstração em geometria plana elementar em livros-texto usados no ensino brasileiro a partir do século XIX – a proposta se atém ao texto demonstrativo em uma esfera específica, a do ensino-aprendizagem.</p>
          </div>
        </div>
      </section>

      <h1 className="title-sort exce">Pré-Treino ZZZ Marca</h1>
      <section className="mid-page">
        <div className="mid-page-top">
          <div className="img-sort-page">
            <img src={ Img3 } alt="" />
          </div>
          <div className="text-sort-page">
            <p>Como tenho por objetivo, nesta Tese, construir uma resposta para a questão – como foi se modificando a demonstração em geometria plana elementar em livros-texto usados no ensino brasileiro a partir do século XIX – a proposta se atém ao texto demonstrativo em uma esfera específica, a do ensino-aprendizagem.</p>
          </div>
        </div>
      </section>
      <BottomSection/>
      <Footer/>
    </>
  )
}