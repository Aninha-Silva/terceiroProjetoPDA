import "./Footer.css";
import github from "../assets/github.png";
import instagram from "../assets/insta.png";
import whatsApp from "../assets/whats-remove.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-footer">
                <div className="descricao-footer">
                <span>  </span>
             </div>
                    <div className="container-sociais">
                        <div className="icons-sociais">
                            <a href="https://github.com/Aninha-Silva/"> <img className="icon-github" src={github} alt="icon-github" /> </a>
                            <a href="https://instagram.com/top.acessorios.de.celular?igshid=YmMyMTA2M2Y="> <img className="icon-instagram" src={instagram} alt="icon-instagram" /> </a>
                            <a href="https://wa.me/message/Z2WZPYLHTNV6M1"> <img className="icon-whats" src={whatsApp} alt="icon-whatsapp" /> </a>
                        </div>
                    </div>
                    <div className="direitos">
                        <span>©Copyright 2023 - Todos os direitos reservados</span>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;