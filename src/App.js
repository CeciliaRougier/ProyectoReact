import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar.jsx';
import './css/NavBar.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />              
      </header>
      <ItemListContainer greeting="Gracias por comprar con nosotros."></ItemListContainer>
    </div>
  );
}

export default App;
