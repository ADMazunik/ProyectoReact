import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
    const { carro } = props
    return (
        <header className="bgHeader container-fluid">
            <nav className="container text-light d-flex flex-row justify-content-between gap-5 align-items-center">
                <ul className="d-flex flex-row align-items-center gap-3">
                    <a href="#"><img src="images/logo.png" alt="Logo empresa" /></a>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Juegos</li></a>
                    <a href="#"><li>Consolas y Accesorios</li></a>
                    <a href="#"><li>Contacto</li></a>
                </ul>
                <CartWidget carrito={carro} />
            </nav>
        </header>

    );
}

export default NavBar