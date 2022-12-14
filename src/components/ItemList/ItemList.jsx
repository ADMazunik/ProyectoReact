import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {

    return (
        <div className="row">
            {products.map(product =>
                <div key={product.id} className="col-md-3 p-2 mt-5">
                    <Item product={product} />
                </div>)}
        </div>
    )
}

export default ItemList;