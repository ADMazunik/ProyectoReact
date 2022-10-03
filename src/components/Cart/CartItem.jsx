import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/Context'
import './Cart.css'

const CartItem = ({ item }) => {

    const { removeItem } = useContext(CartContext)
    return (
        <div className="cart-list cart-bg d-flex justify-content-between align-items-center py-1 px-3 gap-3">
            <img src={item.pictureURL} className="card-img-top w-25 cart-img" alt={item.title} />
            <div className="card-body text-light d-flex flex-column">
                <h1 className="card-title text-center fw-bold align-self-start">{item.title}</h1>
                <h3 className="card-text text-center align-self-start">${item.price}.-</h3>
                <div className="card-text align-self-end d-flex flex-column text-center">
                    <h4 className="card-text">Cantidad: {item.cantidad}</h4>
                    <h4 className="card-text">Total: ${item.cantidad * item.price}</h4>
                    <button type="button" className="btn btn-danger align-self-center" onClick={() => { removeItem(item.id) }}><span className="material-symbols-outlined">
                        delete
                    </span></button>
                </div>
            </div>
        </div>
    )
}

export default CartItem