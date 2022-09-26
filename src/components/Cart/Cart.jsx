import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Context'
import './Cart.css'

const Cart = () => {

    const { cart, clear, removeItem } = useContext(CartContext);

    const totalPrice = () => {
        let total = 0
        cart.map((item) => total += (item.price * item.cantidad)
        )
        return total
    }


    const CartItem = ({ item }) => {
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

    return (
        cart.length > 0 ?
            <div className='cart container d-flex flex-column align-items-center mt-2'>
                <div className="d-flex flex-column">
                    {cart.map(product =>
                        <div key={product.id} className="col-md-3 p-2">
                            <CartItem item={product} />
                        </div>)}
                    <h1 className='cart-bg text-light p-3 d-flex justify-content-between m-2 fw-bolder'>Precio Total: <span>$ {totalPrice()}.-</span></h1>
                </div>
                <div className="container justify-content-center d-flex gap-5">
                    <button type='button' className='btn btn-danger mt-4 w-25 align-self-center fw-bold' onClick={clear}>Vaciar Carrito</button>
                    <button type='button' className='btn btn-success mt-4 w-25 align-self-center fw-bold'>Finalizar Compra</button>
                </div>
            </div> :
            <div className='cart text-center p-5 mt-5'>
                <h1 className='text-light fs-1'>Tu carrito está vacío</h1>
                <Link to={"/"}><button type='button' className='btn btn-warning mt-5 p-3 align-self-center fw-bold fs-2'>Ir a llenarlo</button></Link>
            </div>
    )
}

export default Cart