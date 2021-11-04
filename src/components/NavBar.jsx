import CartWidget from "./CartWidget.js";
import {Link} from 'react-router-dom';


//Escribo la función NavBar
function NavBar() {
    return (
        <nav>
            <ul>
                <li className="btnNBItem"><Link to='/'>Brand</Link></li>
                <li className="btnNBItem"><Link to='/'>Inicio</Link></li>
                <li className="btnNBItem"><Link to='/category/:cat1'>Categoría 1</Link></li>
                <li className="btnNBItem"><Link to='/category/:cat2'>Categoría 2</Link></li>
                <li className="btnNBItem"><Link to='/cart'>{CartWidget}</Link></li>
            </ul>
            <CartWidget />

        </nav>
    );
}
//Exportamos la Función para poder usarla
export default NavBar;

