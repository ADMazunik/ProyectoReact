import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  const carrito = []
  const productos = [
    { id: 1, title: "Elden Ring", price: 6499, pictureURL: "images/eldenring.jpg", detailImg: "images/eldenDetail.jpg", description: "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN DE FANTASÍA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias. " },
    { id: 2, title: "Destiny 2", price: 0, pictureURL: "images/destiny2.jpg" },
    { id: 3, title: "Hogwarts Legacy", price: 5999, pictureURL: "images/hogwarts.jpg" },
    { id: 4, title: "NBA 2K23", price: 6999, pictureURL: "/images/nba2k23.jpg" }
  ];
  return (
    <div>
      <NavBar carro={carrito} />
      <ItemListContainer productos={productos} />
      <ItemDetailContainer productos={productos} />
    </div>
  );
}

export default App;
