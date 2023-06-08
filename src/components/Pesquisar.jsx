import "./Pesquisar.css";

function Pesquisar(){
    return (<form>
        <div className="pesquisar">
        <input className="pesquisar-produto" placeholder="Pesquise seu produto" type="search" />
        <button className="pesquisar-produ">Pesquisar</button>
        </div>
    </form>)
}
export default Pesquisar;