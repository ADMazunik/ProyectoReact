import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Loader from '../Loader/Loader';
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';


const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  const { category } = useParams()


  useEffect(() => {
    const db = getFirestore()
    const itemCollection = collection(db, "productos");
    const categoryPage = category ? query(itemCollection, where("category", "==", category)) : query(itemCollection, orderBy("category", "desc"))


    getDocs(categoryPage).then((snapShot) => {
      setProducts(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false)
    });

  }, [category]);

  return (
    loading === true ? <Loader saludo={"Obteniendo Datos..."} /> :
      <div className='container il-container'>
        <ItemList products={products} />
        <hr />
      </div>
  )
}

export default ItemListContainer