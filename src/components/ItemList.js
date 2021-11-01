import { useEffect, useState } from "react";
import getFetch from "./getFetch";
import Item from "./Item";

const ItemList = () => {

    const [product, setProduct] = useState([])


    useEffect(() => {
        getFetch
            .then((res) => {
                //console.log(res)
                setProduct(res)
            })
            .finally(() => console.log('Esto se ejecuta si o si'))

        console.log(product)
    
    },[])    

    return (
        <> 
        {product.map((prod) => <Item prod={prod}/>)}
        </>
    )
    }

export default ItemList;





