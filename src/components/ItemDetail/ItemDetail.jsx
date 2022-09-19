import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {

    const [counter, setCounter] = useState(0)

    const onAdd = (counter) => {
        console.log("onAdd " + counter)
        setCounter(counter);
    }

    return (
        <div>
            <div className="card d-flex container my-2 p-5">
                <img src={item.detailImg} className={`card-img-top ${item.category}`} alt={item.title} />
                <div className="card-body d-flex flex-column gap-2">
                    <h1 className="card-title text-center">{item.title}</h1>
                    <h3 className="card-text text-center">${item.price}.-</h3>
                    <p className="card-text">{item.description}</p>
                    {counter === 0 ? <ItemCount className="card-text" stock={item.stock} initial={1} onAdd={onAdd} /> : <div className='row gap-4 p-3 card bg-added'><h2 className='text-success text-center'>Se agregó el producto al carrito!</h2>
                        <Link to={"/cart"} className="btn btn-success">Ir al Carrito</Link>
                    </div>}
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
