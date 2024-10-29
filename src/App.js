import './App.css';
import Header from './componentes/Header'
import SecaoCapa from './componentes/SecaoCapa';
import Produtos from './componentes/Produtos'
import SecaoSobre from './componentes/Sobre';

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoCapa/>
      <Produtos/>
      <SecaoSobre/>
    </div>
  );
}

export default App;