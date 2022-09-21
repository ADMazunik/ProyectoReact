import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Provider from "./components/Context/Context";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Loader from "./components/Loader/Loader";

function App() {
  const productos = [
    {
      id: "1",
      category: "games",
      title: "Elden Ring",
      price: 6499,
      stock: 4,
      pictureURL: "/images/eldenring.jpg",
      detailImg: "/images/eldenDetail.jpg",
      description:
        "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN DE FANTASÍA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias. ",
    },
    {
      id: "2",
      category: "games",
      title: "Destiny 2",
      price: "GRATIS",
      stock: 1,
      pictureURL: "/images/destiny2.jpg",
      detailImg: "/images/destiny2Detail.jpg",
      description:
        "Sumérgete en el mundo de Destiny 2 para explorar los misterios del sistema solar y vive la experiencia de combate de respuesta rápida de este shooter en primera persona. Consigue poderosas habilidades elementales y colecciona equipamiento único para personalizar tanto el aspecto como el estilo de juego de tu guardián. Disfruta de la historia cinemática de Destiny 2, de misiones cooperativas desafiantes y de diferentes modos PvP, ya sea en solitario o con amigos. Descárgalo gratis hoy y haz que tu historia quede grabada en el firmamento.",
    },
    {
      id: "3",
      category: "games",
      title: "Hogwarts Legacy",
      price: 5999,
      stock: 15,
      pictureURL: "/images/hogwarts.jpg",
      detailImg: "/images/hogwartsDetail.jpg",
      description:
        "Hogwarts Legacy es un RPG de acción en un mundo abierto ambientado en el universo de los libros de Harry Potter. Embárcate en un viaje que te llevará a lugares nuevos y ya conocidos, y en el que podrás descubrir animales fantásticos, personalizar a tu personaje, elaborar pociones, dominar hechizos, mejorar tus habilidades y convertirte en la bruja o el mago que quieras ser.",
    },
    {
      id: "4",
      category: "games",
      title: "NBA 2K23",
      price: 6999,
      stock: 33,
      pictureURL: "/images/nba2k23.jpg",
      detailImg: "/images/nba2k23Detail.jpg",
      description:
        "Ponte a la altura de las circunstancias y desarrolla todo tu potencial en NBA 2K23. Ponte a prueba contra los mejores jugadores del mundo y demuestra tu talento en Mi CARRERA. Combina a las estrellas actuales con leyendas eternas en MyTEAM. Construye tu propia dinastía en Mi GM o lleva la NBA en una nueva dirección con Mi LIGA. Enfréntate a equipos de la NBA o de la WNBA en JUGAR AHORA y experimenta un juego real. ¿Cómo Responderás a la Llamada?",
    },
    {
      id: "5",
      category: "consoles",
      title: "Sony PlayStation 5 825GB",
      price: 299999,
      stock: 500,
      pictureURL: "/images/ps5.webp",
      detailImg: "/images/ps5.webp",
      description: "Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. "
    }
  ];

  return (
    <div>
      <Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer productos={productos} />} />
            <Route path="/home" element={<ItemListContainer productos={productos} />} />
            <Route path="/category/:category" element={<ItemListContainer productos={productos} />} />
            <Route path="/item/:id" element={<ItemDetailContainer productos={productos} />} />
            <Route path="/category/games/item/:id" element={<ItemDetailContainer productos={productos} />} />
            <Route path="/category/consoles/item/:id" element={<ItemDetailContainer productos={productos} />} />
            <Route path="/nosotros" element={<Loader saludo={"Sitio en Construcción..."} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
