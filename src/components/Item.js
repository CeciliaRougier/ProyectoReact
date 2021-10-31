
function Item(prod) {
    return (
        <div key={prod.id}>
            <div className="card-header">
                {prod.title}
            </div>

            <div className="card-body">
                <img src={prod.pictureUrl} alt='' />
                {prod.price}
            </div>

            <div className="card-footer">
                <button className="btn btn-outline-primary btn-block">
                    detalle del producto
                </button>
            </div>
        </div>
    );
}

export default Item;