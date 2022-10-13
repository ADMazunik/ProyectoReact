import React, { useState, useContext } from 'react'
import { Link, } from 'react-router-dom'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../Context/Context'

const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext)
    const [counter, setCounter] = useState(0)

    const onAdd = (cnt) => {
        setCounter(cnt);
        addItem(item, cnt)
    }

    const toTop = () => {
        window.scrollTo({ top: 1, behavior: "smooth", })
    }

    return (
        <div>
            <div className="card d-flex container my-2 p-5">
                <img src={item.detailImg} className={`card-img-top ${item.category}`} alt={item.title} />
                <div className="card-body d-flex flex-column gap-2">
                    <h1 className="card-title text-center">{item.title}</h1>
                    <h3 className="card-text text-center">${item.price}.-</h3>
                    <p className="card-text">{item.description}</p>
                    <ItemCount className="card-text" stock={item.stock} initial={1} onAdd={onAdd} />
                    {counter !== 0 &&
                        <div className='mt-3 gap-4 p-3 card bg-added'><h2 className='text-warning text-center'>{counter > 1 ? "Se agregaron" : "Se agregó"} <span className='text-light'> <strong>{counter}</strong> {item.title}</span> a tu carrito!</h2>
                            <Link to={"/cart"} onClick={toTop} className="btn btn-success align-self-center">Ir al Carrito</Link>
                        </div>}
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
