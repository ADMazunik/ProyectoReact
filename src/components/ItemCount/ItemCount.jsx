import React, { useEffect, useState } from "react"
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd, item, }) => {

    const [itemStock, setItemStock] = useState(stock)
    const [counter, setCounter] = useState(initial)
    const [itemAdd, setItemAdd] = useState(0)



    const subtractItem = (valor) => {
        setCounter(valor);
    }
    const addItem = (valor) => {
        setCounter(valor);
    }

    const addToCart = (counter) => {
        onAdd(counter)
        setItemStock(itemStock - counter)
        setItemAdd(itemAdd + counter)
        setCounter(itemStock - counter)
    }

    if (itemStock === 0) {
        setItemStock("NO HAY STOCK")
    }

    const onChange = () => {
        setCounter(counter)
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <div className="d-flex flex-column gap-3 card bg-dark px-2">
            <h2 className="text-white text-center">{item}</h2>
            <h5 className="text-white text-center">Disponible: {itemStock}</h5>
            <div className='text-center align-self-center mt-2 d-flex flex-row gap-2'>
                <button type="button" className="btn btn-sm btn-success buttons fs-5" onClick={() => {
                    if (counter > 1) {
                        subtractItem(counter - 1)
                    }
                }}>-</button>
                <input type="text" className="form-control text-center buttons" onChange={onChange} value={counter} />
                <button type="button" className="btn btn-sm btn-success buttons fs-5" onClick={() => {
                    if (counter < itemStock) {
                        addItem(counter + 1)
                    }

                }}>+</button>
            </div>
            <button type="button" className="btn btn-outline-warning" onClick={() => {
                if (counter <= itemStock) {
                    addToCart(counter)
                }

            }
            }>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount