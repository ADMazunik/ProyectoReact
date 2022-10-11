import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import ErrorProductos from '../ErrorProductos/ErrorProductos';
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const response = doc(db, "productos", id);
        getDoc(response).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({ id: snapShot.id, ...snapShot.data() })
            };
            setLoading(false)
        })
    }, [id]);

    return (
        loading === true ? <Loader saludo={"Obteniendo Datos..."} /> :
            <div>
                {item.category ? <ItemDetail item={item} /> : <ErrorProductos />} </div>
    )
}

export default ItemDetailContainer