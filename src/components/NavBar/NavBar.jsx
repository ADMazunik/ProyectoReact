import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (carrito) => {
    return (
        <header className="bgHeader container-fluid">
            <nav className="container text-light d-flex flex-row justify-content-between gap-5 align-items-center">
                <ul className="d-flex flex-row align-items-center gap-3">
                    <NavLink to="/"><img src="/images/logo.png" alt="Logo empresa" /></NavLink>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to={"/category/games"}><li>Juegos</li></NavLink>
                    <NavLink to={"/category/consoles"}><li>Consolas y Accesorios</li></NavLink>
                    <NavLink to={"/nosotros"}><li>Nosotros</li></NavLink>
                </ul>
                <CartWidget />
            </nav>
        </header>

    );
}

export default NavBar