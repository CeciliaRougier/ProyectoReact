import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

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
            <ItemCount  stock={5} initial={1}/>
        </div>
    );
}

export default Item;