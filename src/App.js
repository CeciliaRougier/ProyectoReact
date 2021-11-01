import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar.jsx';
import './css/NavBar.css';
import './css/ItemCount.css';
import './css/Item.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">

      <header>
        <NavBar />              
      </header>
      
      <ItemListContainer/>

    </div>
  );
}

export default App;
