import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react"



function App() {
  const carrito = []
  return (
    <div className="">
      <NavBar carro={carrito} />
      <ItemListContainer greeting='Vapor Gaming - Sitio en construccion.' />
    </div>
  );
}

export default App;
