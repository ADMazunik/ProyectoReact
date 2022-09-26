import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/Context'
import './CartWidget.css'

const CartWidget = () => {
  const { cartTotal, cart } = useContext(CartContext)
  return (
    cart.length > 0 ?
      <Link to={"/cart"}><div className='d-flex flex-row'>
        <img className='carrito' src="/images/carrito.png" alt="carrito" />
        <p className='numeroCarro'>{cartTotal()}</p>
      </div></Link> :
      null

  )
}

export default CartWidget
