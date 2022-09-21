import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Loader from '../Loader/Loader';


const ItemListContainer = ({ productos }) => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  const { category } = useParams()


  useEffect(() => {

    const getProducts = new Promise((resolve) => {
      setLoading(true)
      setTimeout(() => {
        resolve(productos)
        return resolve(productos);
      }, 2000)
    });
    getProducts.then((response) => {
      setLoading(false)

      if (!category) {
        setProducts(response)
      } else {
        setProducts(response.filter(cat => cat.category === category));
      }
    })
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