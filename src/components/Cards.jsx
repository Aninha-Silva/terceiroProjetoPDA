import "./Cards.css";
import fone from "../assets/fone.png";
import pelicula from "../assets/pelicula.png";
import jbl from "../assets/jbl.png";
import strapfone from "../assets/strapfone.png";
import cabo from "../assets/cabo.png";
import smartwatch from "../assets/smartwatch.png";

const Cards = () => {
  return (
    <>
      <div className="cards">

        <div className="card">
          <img className="card-img-top" src={fone} alt="" />
          <div className="card-body">
            <h5 className="card-title">Fone Sansung</h5>
            <h6 className="preco-produto">R$ 59,90</h6>
            <a href="/#" className="btn btn-primary">Adicionar ao carrinho</a>
            <a href="/#" className="btn btn-primary">Comprar</a>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={pelicula} alt="" />
          <div className="card-body">
            <h5 className="card-title">Película 3D</h5>
            <h6 className="preco-produto">R$ 29,90</h6>
            <a href="/#" className="btn btn-primary">Adicionar ao carrinho</a>
            <a href="/#" className="btn btn-primary">Comprar</a>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={strapfone} alt="" />
          <div className="card-body">
            <h5 className="card-title">Strap Fone</h5>
            <h6 className="preco-produto">R$ 19,90</h6>
            <a href="/#" className="btn btn-primary">Adicionar ao carrinho</a>
            <a href="/#" className="btn btn-primary">Comprar</a>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={cabo} alt="" />
          <div className="card-body">
            <h5 className="card-title">Cabo Iphone</h5>
            <h6 className="preco-produto">R$ 45,00</h6>
            <a href="/#" className="btn btn-primary">Adicionar ao carrinho</a>
            <a href="/#" className="btn btn-primary">Comprar</a>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={smartwatch} alt="" />
          <div className="card-body">
            <h5 className="card-title">Smartwatch</h5>
            <h6 className="preco-produto">R$ 139,90</h6>
            <a href="/#" className="btn btn-primary">Adicionar ao carrinho</a>
            <a href="/#" className="btn btn-primary">Comprar</a>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={jbl} alt="" />
          <div className="card-body">
            <h5 className="card-title">Caixa de som JBL</h5>
            <h6 className="preco-produto">R$ 149,90</h6>
            <a href="/#" className="btn btn-primary">Adicionar ao carrinho</a>
            <a href="/#" className="btn btn-primary">Comprar</a>
          </div>
        </div>

      </div>

    </>
  );
};
export default Cards;