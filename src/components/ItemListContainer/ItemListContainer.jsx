import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import eldenring from "../../assets/images/eldenring.jpg"
import destiny2 from "../../assets/images/destiny2.jpg"
import hogwarts from "../../assets/images/hogwarts.jpg"
import nba2k23 from "../../assets/images/nba2k23.jpg"

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productos = [
      { id: 1, title: "Elden Ring", price: 6499, pictureURL: eldenring },
      { id: 2, title: "Destiny 2", price: 0, pictureURL: destiny2 },
      { id: 3, title: "Hogwarts Legacy", price: 5999, pictureURL: hogwarts },
      { id: 4, title: "NBA 2K23", price: 6999, pictureURL: nba2k23 }
    ];
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(productos);
      }, 2000)
    });
    getProducts.then((response) => {
      setProducts(response);
      console.log(response)
    })
  }, [])

  return (
    <div className='container'>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer