import { useRef } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { createOrder, getProduct, updateProduct } from "../../firebase/firebase"
import { toast } from "react-toastify"

export const Checkout = () => {
    const datForm = useRef();
    const { cart, totalPrice, emptyCart } = useCartContext()
    let navigate = useNavigate()
    const readForm = (e) => {
        e.preventDefault()
        const formData = new FormData(datForm.current)
        const customer = Object.fromEntries(formData)

        if (customer.email === customer.repeatedEmail) {
            const cartFilter = [...cart]
            cartFilter.forEach(cartProduct => {
                getProduct(cartProduct.id).then(productDatabase => {
                    if (productDatabase.stock >= cartProduct.quantity) {
                        productDatabase.stock -= cartProduct.quantity
                        updateProduct(productDatabase.id, productDatabase)
                    } else {
                        alert("Not enough stock.")
                    }
                })
            })
            const orderDetail = cartFilter.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }));

            createOrder(customer, totalPrice(), orderDetail, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
                .then(order => {
                    toast(`Thank you for your order #${order.id} for ${totalPrice()}€. Happy shopping! :)`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    emptyCart()
                    e.target.reset()
                    navigate("/")
                })
                .catch(error => {
                    console.error(error)
                })
        } else {
            alert("Emails must match, please amend.")
        }
    }

    return (
        <>
            {
                cart.length === 0 ?
                    <>
                        <h2>Please add products to the cart.</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continue browsing</button></Link>
                    </>
                    :
                    <div className="container divForm" >
                        <form onSubmit={readForm} ref={datForm}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your name</label>
                                <input type="text" className="form-control" name="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your email</label>
                                <input type="email" className="form-control" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Repeat email</label>
                                <input type="email" className="form-control" name="repeatedEmail" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Your phone number</label>
                                <input type="number" className="form-control" name="phone" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Your address</label>
                                <input type="text" className="form-control" name="address" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Checkout</button>
                        </form>
                    </div>
            }
        </>
    )
}