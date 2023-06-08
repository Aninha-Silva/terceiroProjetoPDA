import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../assets/logo.png";


function Header(){
    return (<header>
        <div className="cabecario">
        <img className="imagem-principal" src={logo} alt="" />
        <button type="button" className="btn btn-outline-dark">Login</button>
        <Link  to="/produto" className="btn btn-outline-dark">Novo produto</Link>
        </div>
    </header>)
}
export default Header;
