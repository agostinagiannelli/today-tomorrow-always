import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"

export const Cart = () => {
    const { cart, totalPrice, emptyCart } = useCartContext()

    return (
        <>
            {
                cart.length === 0 ?
                    <>
                        <h1>Empty Cart</h1>
                        <button className="btn btn-dark"><Link to={"/"} className="nav-link">Continue browsing</Link></button>
                    </>
                    :
                    <div className="container cartContainer">
                        {<ItemList products={cart} template={"ItemCart"} />}
                        <div className="cartButtons">
                            <p>Total amount: {totalPrice()}€</p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Empty cart</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continue browsing</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Checkout</button></Link>
                        </div>
                    </div>
            }
        </>
    )
}