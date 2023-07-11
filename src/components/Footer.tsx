import logo from "../assets/img/logo.png"
import face from "../assets/img/face_icon.svg"
import whats from "../assets/img/whats_icon.svg"
import insta from "../assets/img/inst_icon.svg"

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="left-footer">
            <h3>Informações de contato</h3>
            <p>contato@emaildevoces.com.br</p>
            <p>(31) Número de Telefone</p>
          </div>
          <div className="center-footer">
            <img src={logo} alt="Logo da Saufid Suplementos"/>
            <div className="qr-code"><span>Qr<br/>Code</span></div>
          </div>
          <div className="right-footer">
            <p>Redes sociais</p>
            <ul>
              <li>
                <a href="#"><img className="icons" src={whats} alt="whatsapp"/></a>
              </li>
              <li>
                <a href="#"><img className="icons" src={face} alt="facebook"/></a>
              </li>
              <li>
                <a href="#"><img className="icons" src={insta}  alt="Instagram"/></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-footer">
          <p>SAUFID CNPJ: XXXXXXXXXXXXX/XXXXXXX-XX © Todos os direitos reservado</p>
        </div>
      </footer>
    </>
  )
}