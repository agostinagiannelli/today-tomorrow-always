import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ item }) => {
    const onAdd = (count) => {
        console.log(count)
        console.log(item)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.img} className="img-fluid rounded-start" alt={`${item.name}`} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Type: {item.type}</p>
                    <p className="card-text">Price: {item.price}€</p>
                    <p className="card-text">Available Stock: {item.stock}</p>
                    <ItemCount InitialValue={1} min={1} max={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}