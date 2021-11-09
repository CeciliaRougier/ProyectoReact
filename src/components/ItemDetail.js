
import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


//Función que se ejecuta al apretar en "Detalles del producto"
function ItemDetail(prod) {

    const [cambiarBoton, setCambiarBoton] = useState(false);

    const [count, setCount] = useState(0);
    const onAdd = (cant) => {
        setCount(cant);
        setCambiarBoton(true);
    };
    console.log(count);

    return (
        <div key={prod.prod.id} className="detalle-item">
            <h2>Detalle del Item: {prod.prod.title}</h2>
            <div>
                <img src={prod.prod.foto} alt='imagen' />
            </div>
            <div>
                <p>{prod.prod.description}</p>
            </div>

            {/* Al agregar "Apretar" cambia el botón a "Terminar la compra" */}
            {cambiarBoton ?
                //El botón "Terminar la compra" me lleva a Cart
                <Link to='/cart'>
                    <button className="btnItemCount">Terminar la compra</button>
                </Link>
                :
                <ItemCount stock={5} initial={1} onAdd={onAdd} />}

        </div>
    );
}

export default ItemDetail