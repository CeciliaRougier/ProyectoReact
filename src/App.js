import './App.css';
import ItemCount from './components/ItemCount';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar.jsx';
import './css/NavBar.css';
import './css/ItemCount.css'

function App() {
  return (
    <div className="App">

      <header>
        <NavBar />              
      </header>

      <ItemListContainer greeting="Gracias por comprar con nosotros."></ItemListContainer>
      
      <body>
        {/* Muestra la cantidad de unidades */}
        <ItemCount stock={5} initial={1}/>
      </body>
    </div>
  );
}

export default App;
