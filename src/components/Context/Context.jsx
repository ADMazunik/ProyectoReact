import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

const Provider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, cant) => {
        if (isInCart(item.id)) {
            let product = cart.find(i => i.id === item.id);
            cart[cart.indexOf(product)].cantidad += cant;
            setCart([...cart])
        } else {
            setCart([...cart, { ...item, cantidad: cant }]);
        }
    }

    const removeItem = (itemId) => {
        let product = cart.find(i => i.id === itemId);
        let index = cart.indexOf(product)
        cart.splice(index, 1)
        setCart([...cart]);
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(i => i.id === id)
    }

    const cartTotal = () => {
        return cart.length
    }

    const totalPrice = () => {
        let total = cart.reduce((acc, item) => {
            return acc + (item.price * item.cantidad)
        }, 0)
        return total
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartTotal, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider