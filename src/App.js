import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx';
import './css/NavBar.css';
import './css/ItemCount.css';
import './css/Item.css';
import './css/ItemDetail.css';
import './css/Cart.css';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <div className="App">

      {/* Provider encierra toda la APP */}
      <CartContextProvider>

        {/*  Componentes donde quiero navegar */}
        <BrowserRouter>

          <NavBar />

          {/* Navegar entre los componentes */}
          <Switch>

            {/* Route: Crea conección entre componente y la ruta */}
            <Route exact path='/' component={ItemListContainer} />
            <Route exact path='/category/:id' component={ItemListContainer} />
            <Route exact path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart} />
          </Switch>

        </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;
