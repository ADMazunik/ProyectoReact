import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Provider from "./components/Context/Context";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/games/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/consoles/item/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
