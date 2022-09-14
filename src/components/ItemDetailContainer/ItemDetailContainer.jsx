import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = ({ productos }) => {

    const [loading, setLoading] = useState(true)

    const [details, setDetails] = useState({});

    const { id } = useParams()
    useEffect(() => {
        setLoading(true)

        const getDetail = new Promise((resolve) => {
            setTimeout(() => {
                return resolve(productos.find(prod => prod.id === id)
                );
            }, 2000)
        });
        getDetail.then((response) => {
            setDetails(response);
            setLoading(false)

        });
    }, [id]);

    return (
        loading === true ? <Loader saludo={"Obteniendo Datos..."} /> :
            <div>
                <ItemDetail details={details} />
            </div>
    )
}

export default ItemDetailContainer