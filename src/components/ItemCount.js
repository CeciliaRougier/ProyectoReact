import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount({ stock, initial, onAdd }) {

    const [contador, setCount] = useState(initial);

    //Función al apretar el botón "+"
    const clickSumar = () => {
        if (contador < stock) setCount(contador + 1)
    }

    //Función al apretar el botón "-"
    const clickRestar = () => {
        if (contador > initial) setCount(contador - 1)
    }

    //Función al apretar "Agregar"
    const handlerOnAdd = () => {
        onAdd(contador)
        setCount(initial)
    }

    return (
        <div className="ItemCount">
            {/* Botón - */}
            <button onClick={clickRestar} className="btnItemCount">-</button>
            <p className="count">{contador}</p>
            {/* Botón + */}
            <button onClick={clickSumar} className="btnItemCount">+</button>
            {/* Botón AGREGAR */}
            <button onClick={handlerOnAdd} className="btnItemCount">Agregar</button>
        </div>
    )
}
export default ItemCount;