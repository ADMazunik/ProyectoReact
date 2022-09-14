import React from "react"
import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd, item, }) => {

    const [itemStock, setItemStock] = useState(stock)
    const [cantidad, setCantidad] = useState(initial)
    const [itemAdd, setItemAdd] = useState(onAdd)



    const subtractItem = (valor) => {
        setCantidad(valor);
    }
    const addItem = (valor) => {
        setCantidad(valor);
    }

    const addtoCart = () => {
        setItemStock(itemStock - cantidad)
        setItemAdd(itemAdd + cantidad)
        setCantidad(initial)
    }

    const Message = (props) => {
        const message = (i) => {
            if (i > 0) {
                let msg = `¡Añadiste ${i} productos al carrito!`
                return msg
            }
        }
        return (
            <div className="text-white text-center">{message(props.added)}</div>
        )
    }


    if (itemStock === 0) {
        setItemStock("NO HAY STOCK")
    }
    const onChange = () => {
        setCantidad(cantidad)
    }

    return (
        <div className="d-flex flex-column gap-3 card bg-dark px-2">
            <h2 className="text-white text-center">{item}</h2>
            <h5 className="text-white text-center">Disponible: {itemStock}</h5>
            <div className='text-center align-self-center mt-2 d-flex flex-row gap-2'>
                <button type="button" className="btn btn-sm btn-success buttons fs-5" onClick={() => {
                    if (cantidad > 1) {
                        subtractItem(cantidad - 1)
                    }
                }}>-</button>
                <input type="text" className="form-control text-center buttons" onChange={onChange} value={cantidad} />
                <button type="button" className="btn btn-sm btn-success buttons fs-5" onClick={() => {
                    if (cantidad < itemStock) {
                        addItem(cantidad + 1)
                    }

                }}>+</button>
            </div>
            <button type="button" className="btn btn-outline-warning" onClick={() => {
                if (cantidad <= itemStock) {
                    addtoCart()
                }

            }
            }>Agregar al Carrito</button>
            <Message added={itemAdd} />
        </div>
    )
}

export default ItemCount