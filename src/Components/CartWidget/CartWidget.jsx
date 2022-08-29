import React from 'react'
import './CartWidget.css'
import Carrito from "../../Assets/images/carrito.png"

const CartWidget = (props) => {
  const {carrito} = props
  return (
    <div className='d-flex flex-row'>
      <img className='carrito' src={Carrito} alt="" />
      <p className='numeroCarro'>{carrito.length}</p>
    </div>
  )
}

export default CartWidget
