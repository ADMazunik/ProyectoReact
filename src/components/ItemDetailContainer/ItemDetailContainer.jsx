import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ productos }) => {

    const [details, setDetails] = useState({});

    useEffect(() => {

        const getDetail = new Promise((resolve) => {
            const detail = productos.find(e => e.id === 1)
            setTimeout(() => {
                return resolve(detail);
            }, 2500)
        });
        getDetail.then((response) => {
            setDetails(response);

        });
    }, []);

    return (
        <div>
            <ItemDetail details={details} />
        </div>
    )
}

export default ItemDetailContainer