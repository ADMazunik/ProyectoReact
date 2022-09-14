import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ details }) => {

    return (
        <div>
            <div className="card d-flex container my-2 p-5">
                <img src={details.detailImg} className={`card-img-top ${details.category}`} alt={details.title} />
                <div className="card-body d-flex flex-column gap-2">
                    <h1 className="card-title text-center">{details.title}</h1>
                    <h3 className="card-text text-center">${details.price}.-</h3>
                    <p className="card-text">{details.description}</p>
                    <ItemCount className="card-text" stock={4} initial={1} onAdd={0} />
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
