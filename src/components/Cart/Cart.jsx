import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'
import Loader from '../Loader/Loader'
import Item from '../Item/Item'

const CartWidget = () => {
    const { cart, clear, removeItem } = useContext(CartContext);

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className="d-flex flex-row gap-5">
                {cart.map(product =>
                    <div key={product.id} className="col-md-3 p-2 mt-5">
                        <Item product={product} />
                        <button type="button" className="btn btn-primary" onClick={() => { removeItem(product.id) }}>Eliminar</button>

                    </div>)}
            </div>
            <button type='button' className='btn btn-warning mt-4 w-25 align-self-center fw-bold' onClick={clear}>Vaciar Carrito</button>
            <Loader saludo={"Carrito en Construcción"}></Loader>
        </div>
    )
}

export default CartWidget