import React from 'react'
import './CartWidget.css'

const CartWidget = (props) => {
  const { carrito } = props
  return (
    <div className='d-flex flex-row'>
      <img className='carrito' src="images/carrito.png" alt="" />
      <p className='numeroCarro'>{carrito.length}</p>
    </div>
  )
}

export default CartWidget
