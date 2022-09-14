import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (carrito) => {
    const { carro } = carrito
    return (
        <header className="bgHeader container-fluid">
            <nav className="container text-light d-flex flex-row justify-content-between gap-5 align-items-center">
                <ul className="d-flex flex-row align-items-center gap-3">
                    <Link to="/"><img src="/images/logo.png" alt="Logo empresa" /></Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to={"/category/games"}><li>Juegos</li></Link>
                    <Link to={"/category/consoles"}><li>Consolas y Accesorios</li></Link>
                    <Link to={"/nosotros"}><li>Nosotros</li></Link>
                </ul>
                <CartWidget carrito={carro} />
            </nav>
        </header>

    );
}

export default NavBar