import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({ productos }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(productos);
      }, 2000)
    });
    getProducts.then((response) => {
      setProducts(response);

    })
  },);

  return (
    <div className='container'>
      <ItemList products={products} />
      <hr />
    </div>
  )
}

export default ItemListContainer