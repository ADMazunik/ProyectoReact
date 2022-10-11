import React from "react";
import './Item.css'
import { Link, } from "react-router-dom";

const Item = ({ product }) => {


    return (
        <div className="card il-card d-flex flex-column align-items-center">
            <img src={product.pictureURL} className="card-img-top" alt={product.title} />
            <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-center">${product.price}.-</p>
                <Link to={"/item/" + product.id}><button className="btn btn-primary">Ver Detalles</button></Link>
            </div>
        </div>
    )

}

export default Item;