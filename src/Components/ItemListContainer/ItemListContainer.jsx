import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
  return (
    <div className='d-flex justify-content-center'>
      <ItemCount stock={5} initial={1} onAdd={0} item={"Plantilla"} />
    </div>
  )
}

export default ItemListContainer