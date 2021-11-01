import ItemCount from "./ItemCount";

function Item(prod) {
    return (
        <div key={prod.prod.id} className="card">
            <div className="card-header">
                {prod.prod.title}
            </div>

            <div className="card-body">
                <img src={prod.prod.pictureUrl} alt='' />
                ${prod.prod.price}
            </div>

            <div className="card-footer">
                <button className="btn btn-outline-primary btn-block">
                    Detalle del producto
                </button>
            </div>
            <ItemCount  stock={5} initial={1}/>
        </div>
    );
}

export default Item;