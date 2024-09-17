import './App.css';
import Header from './componentes/Header'
import SecaoCapa from './componentes/SecaoCapa';
import Produtos from './componentes/Produtos'

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoCapa/>
      <Produtos/>
    </div>
  );
}

export default App;