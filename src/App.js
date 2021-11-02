import './App.css';
import NavBar from './components/NavBar.jsx';
import './css/NavBar.css';
import './css/ItemCount.css';
import './css/Item.css';
import './css/ItemDetail.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">

      <header>
        <NavBar />              
      </header>
      
      <ItemListContainer/>
      <ItemDetailContainer/>

    </div>
  );
}

export default App;
