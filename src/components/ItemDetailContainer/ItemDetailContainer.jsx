import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = ({ productos }) => {

    const { id } = useParams()
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        const getDetail = new Promise((resolve) => {
            setTimeout(() => {
                return resolve(productos.find(prod => prod.id === id)
                );
            }, 2000)
        });
        getDetail.then((response) => {
            setItem(response);
            setLoading(false)

        });
    }, [productos, id]);

    return (
        loading === true ? <Loader saludo={"Obteniendo Datos..."} /> :
            <div>
                <ItemDetail item={item} />
            </div>
    )
}

export default ItemDetailContainer