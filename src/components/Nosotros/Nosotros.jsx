import React from 'react'
import './Nosotros.css'

const Nosotros = () => {
    return (
        <div className='il-container text-center text-light'>
            <h1 className='my-5'>Vapor Gaming - El Steam™ Argentino</h1>
            <h4 className='mt-4'> Somos una empresa fictícia que se especializa en brindarte la mayor comodidad a la hora de conseguir todo acerca del mundo gamer</h4>
            <h4> En nuestro catálogo encontrarás los mejores precios y las últimas novedades en consolas y juegos digitales.</h4>
            <h1 className='my-4'>Sitio Web basado en la mejor tienda de juegos para PC</h1>
            <p className='fs-1 fw-bolder'><a className='link-success steam-link' href="https://store.steampowered.com/"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/593110/capsule_616x353.jpg?t=1646874726" alt="" /></a></p>
        </div>
    )
}

export default Nosotros