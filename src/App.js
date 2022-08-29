import './App.css';
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const carrito = []
  return (
    <div className="">
      <NavBar carro={carrito} />
      <h1 className='fs-1 text-center text-light pt-5'>Vapor Gaming - Sitio en construccion.</h1>
    </div>
  );
}

export default App;
