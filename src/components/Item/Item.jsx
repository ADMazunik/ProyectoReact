import React from "react";
import './Item.css'

const Item = ({ title, pictureURL, price }) => {
    return (
        <div className="card d-flex flex-column align-items-center">
            <img src={pictureURL} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}.-</p>
                <button href="#" className="btn btn-primary">Ver Detalles</button>
            </div>
        </div>
    )

}

export default Item;