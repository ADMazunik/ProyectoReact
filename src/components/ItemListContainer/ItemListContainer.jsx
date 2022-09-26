import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Loader from '../Loader/Loader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemListContainer = ({ productos }) => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  const { category } = useParams()


  useEffect(() => {
    const db = getFirestore()
    const itemCollection = collection(db, "productos");
    const categoryPage = category ? query(itemCollection, where("category", "==", category)) : itemCollection


    getDocs(categoryPage).then((snapShot) => {
      setProducts(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false)
    });

  }, [category, productos]);

  return (
    loading === true ? <Loader saludo={"Obteniendo Datos..."} /> :
      <div className='container il-container'>
        <ItemList products={products} />
        <hr />
      </div>
  )
}

export default ItemListContainer