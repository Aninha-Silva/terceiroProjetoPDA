import "./Produtos.css";

const Produtos = () => {
  return (
    <form>
       <div className="form-group">
        <label htmlFor="FormControlInput1">Id do produto</label>
        <input className="idProduto" type="number" name="id" id="id" />
        <label htmlFor="FormControlInput1">Título do produto</label>
        <input className="tituloProduto" type="text" name="text" id="titulo" />
        <label htmlFor="FormControlInput1">Descrição</label>
        <input className="descricaoProduto" type="text" id="FormControlInput1" />
        <label htmlFor="dinheiro">R$</label>
        <input className="valorProduto" type="number" id="dinheiro" name="text" />
        <a href="/#" className="btn btn-outline-dark">Enviar</a>
      </div>
    </form>

  )
}
export default Produtos;