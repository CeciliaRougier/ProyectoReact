import { Link } from "react-router-dom";


//Item que trae la información de cada producto
function Item(prod) {
    return (
        <div key={prod.prod.id} className="card">
            <div className="card-header">
                <h2 className="titulo-card">{prod.prod.title}</h2>
                <h3>{prod.prod.category}</h3>
            </div>

            <div className="card-body">
                <img src={prod.prod.pictureUrl} alt='' />
                ${prod.prod.price}
            </div>

            <div className="card-footer">
                <Link to={`/item/${prod.prod.id}`}>
                    DETALLE DEL PRODUCTO
                </Link>
            </div>

        </div>
    );
}

export default Item;