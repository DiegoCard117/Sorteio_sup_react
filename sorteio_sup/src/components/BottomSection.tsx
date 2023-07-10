import { Button } from "./Button";
import imagem from "../assets/img/top-footer.png"

export function BottomSection() {
  return (
    <>
    <h1 id="why" className="title-why">Porque um Sorteio?</h1>
      <section className="grid-sort">
        <div className="grid-inter-left paragrafos">
          <p>Estamos crescendo e queremos retribuir todo o apoio que recebemos. Por isso, decidimos organizar um sorteio exclusivo e saudável para vocês.</p>
          <p>Nossa missão é promover sua saúde e bem-estar de maneira sustentável. Afinal, acreditamos que uma vida equilibrada é a chave para alcançar o máximo potencial.</p>
          <p>Não perca essa chance de ganhar prêmios que vão impulsionar seu estilo de vida saudável. Estamos comprometidos em oferecer produtos de alta qualidade e proporcionar experiências únicas para nossa comunidade.</p>
          <p>Queremos ser o parceiro que te ajuda a alcançar seus objetivos.</p>

          <p>A Saufid Suplementos está aqui para você, oferecendo suporte, inspiração e os melhores produtos para tornar sua jornada de bem-estar ainda mais completa.</p>
          <p>Junte-se a nós nesse sorteio saudável e venha descobrir como é possível alcançar a melhor versão de si mesmo!</p>
          <p>Saufid Suplementos: Promovendo saúde e bem-estar em Uberlândia e além! Junte-se a nós e descubra como podemos ajudá-lo a alcançar a sua melhor versão.</p>
          <p>Adquira seu bilhete e participe deste sorteio especial agora mesmo!</p>
          <Button text="Comprar agora" />
        </div>
        <div className="grid-inter-right">
          <div className="img1-inter">.</div>
          <div className="img2-inter"></div>
          <div className="img3-inter"></div>
        </div>
        </section>
        <section id="about" className="section-top-footer">
          <h1 className="title-top-footer">Quem é a Saufid?</h1>
          <div className="top-footer">
            <img src={imagem} alt="Imagem de Suplementos"/>
              <div className="paragrafos para-top-footer">
                <p>A Saufid Suplementos está aqui para você, oferecendo suporte, inspiração e os melhores produtos para tornar sua jornada de bem-estar ainda mais completa. </p>
                <p>Junte-se a nós nesse sorteio saudável e venha descobrir como é possível alcançar a melhor versão de si mesmo!</p>
                <p>Saufid Suplementos: Promovendo saúde e bem-estar em Uberlândia e além! Junte-se a nós e descubra como podemos ajudá-lo a alcançar a sua melhor versão. </p>
                <p>Adquira seu bilhete e participe deste sorteio especial agora mesmo!</p>
                <p>A Saufid Suplementos está aqui para você, oferecendo suporte, inspiração e os melhores produtos para tornar sua jornada de bem-estar ainda mais completa.</p>
                <p>Junte-se a nós nesse sorteio saudável e venha descobrir como é possível alcançar a melhor versão de si mesmo!</p>
              </div>
          </div>
        </section>
    </>
  )
}