
import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import getItem from "./getItem";
import ItemDetail from "./ItemDetail";

//Busca, a través del ID, los elementos de cada producto
const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const { id } = useParams()

    useEffect(() => {

        if (id) {
            getItem
                .then((res) => {
                    console.log('Llamada a api')
                    setProd(res.find(prod => prod.id === id))
                })
                .finally(() => console.log('Esto se ejecuta'))

            console.log(prod)
        } else {
            getItem
                .then((res) => {
                    console.log('Llamada a api')
                    setProd(res)
                })
                .finally(() => console.log('Esto se ejecuta'))

            console.log(prod)
        }

    })

    //Muestra los elementos de cada producto
    return (
        <>
            {prod && <ItemDetail prod={prod} />}
        </>
    )
}

export default ItemDetailContainer