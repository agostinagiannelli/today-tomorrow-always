import { ItemCount } from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"
export const ItemDetail = ({ item }) => {
    const { addItem } = useCartContext()
    const onAdd = (count) => {
        addItem(item, count)
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
                    <p className="card-text">Available stock: {item.stock}</p>
                    <ItemCount initialValue={1} min={1} max={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}