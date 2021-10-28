import { useEffect, useState } from "react";
import getFetch from "./Item";




const ItemList = () => {

    const [product, setProduct] = useState([])


    useEffect(() => {
        getFetch
            .then((res) => {
                //console.log(res)
                setProduct(res)
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Esto se ejecuta si o si'))

        console.log(product)

    })

    return (

        <>
            {product.map((prod) => <div key={prod.id} className="card">
                
                <div className="card-header">
                    {prod.title}
                </div>

                <div className="card-body">
                    <img src={prod.foto} alt='' />
                    {prod.price}
                </div>

                <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">
                        detalle del producto
                    </button>
                </div>

            </div>)}
        </>
    )
        ;

}

export default ItemList;





