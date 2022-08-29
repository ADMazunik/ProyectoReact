import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

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
