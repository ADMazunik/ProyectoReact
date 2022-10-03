import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Context'
import CartItem from './CartItem';
import './Cart.css'

const Cart = () => {

    const { cart, clear, totalPrice } = useContext(CartContext);

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
                <div className="container d-flex justify-content-evenly gap-3">
                    <button type='button' className='btn btn-danger my-3 fw-bold fs-3 w-25' onClick={clear}>Vaciar Carrito</button>
                    <Link to={"/checkout"} type='button' className='btn btn-success my-3 fw-bold w-25 fs-3'> Finalizar Compra </Link>
                </div>
            </div> :
            <div className='cart text-center p-5 mt-5'>
                <h1 className='text-light fs-1'>Tu carrito está vacío</h1>
                <Link to={"/"}><button type='button' className='btn btn-warning mt-5 px-5 align-self-center fw-bold fs-2'>Ir a llenarlo</button></Link>
            </div>
    )
}

export default Cart