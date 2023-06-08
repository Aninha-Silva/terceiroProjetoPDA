import Header from "./components/Header";
import Rotas from "./routes";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
  <Header/>
  <Rotas/>
  <Footer/>
    </div>
  );
}
export default App;