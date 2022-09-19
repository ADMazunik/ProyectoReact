import React from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = (props) => {
  const { carrito } = props
  return (
    <Link to={"/cart"}><div className='d-flex flex-row'>
      <img className='carrito' src="/images/carrito.png" alt="" />
      <p className='numeroCarro'>{carrito.length}</p>
    </div></Link>

  )
}

export default CartWidget
