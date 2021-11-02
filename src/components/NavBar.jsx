import CartWidget from "./CartWidget.js";


//Escribo la función NavBar
function NavBar() {
    return (
        <nav>
            <button className="btnBrand">Brand</button>

            <ul>
                <li className="btnNBItem"><a href="./components/inicio.js">Inicio</a></li>
                <li className="btnNBItem"><a href="./components/nosotros.js">Nosotros</a></li>
                <li className="btnNBItem"><a href="./components/productos.js">Productos</a></li>
                <li className="btnNBItem"><a href="./components/contacto.js">Contacto</a></li>
            </ul>
            <CartWidget/>

        </nav>
    );
}
//Exportamos la Función para poder usarla
export default NavBar;

