import '../src/assets/css/style.css'

import { Header } from './components/Header';

import { Footer } from './components/Footer';
import { BottomSection } from './components/BottomSection';
import { Button } from './components/Button';

function Home() {
  return (
      <>
        <Header/>
        <section className="top">
            <div className="text-button">
              <p className="text">Compre agora o seu bilhete para o sorteio
                que acontecerá no dia XX/XX/23.</p>
              <Button text='Comprar agora'/>
            </div>
        </section>
        <section className="title-top">
            <h1>Conheça nossos sorteios mais populares</h1>
            <p>Abaixo está nossos top 3 sorteios, clique neles e descubra mais sobre os produtos sorteados ! </p>
        </section>
        <section className="container">
            <div className="content-img1">
              <div className="img1"></div>
              <p className="description description-all">Como tenho por objetivo, nesta Tese, construir uma resposta para a questão – como foi se modificando a demonstração em geometria </p>
            </div>
            <div className="content-img2">
              <div className="img2"></div>
              <p className="description description-all">Como tenho por objetivo, nesta Tese, construir uma resposta para a questão – como foi se modificando a demonstração em geometria </p>
            </div>
            <div className="content-img3">
              <div className="img3"></div>
              <div className=" description-all description-right">
                <p>Como tenho por objetivo, nesta Tese, construir uma resposta para a questão – como foi se modificando a demonstração em geometria</p>
                <p>Como tenho por objetivo, nesta Tese, construir uma resposta para a questão – como foi se modificando a demonstração em geometria</p>
              </div>
            </div>
        </section>
        <BottomSection/>
        <Footer/>
      </>
  );
}

export default Home;
