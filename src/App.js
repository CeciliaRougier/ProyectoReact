import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar.jsx';
import './css/NavBar.css';
import './css/ItemCount.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">

      <header>
        <NavBar />              
      </header>
      
      <ItemListContainer/>

        <ItemCount stock={5} initial={1}/>

    </div>
  );
}

export default App;
