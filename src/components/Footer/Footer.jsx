import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="py-3 mt-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item "><a href="https://github.com/ADMazunik" className="nav-link px-2 text-muted link-light">Github</a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/alan-mazunik-69961124a/" className="nav-link px-2 text-muted link-light">LinkedIn</a></li>
                </ul>
                <p className="text-center text-light">&copy; 2022 <span className='text-muted'>ADMaz Inc.</span>  All rights reserved. All trademarks are property of their respective owners in the US and other countries.</p>
                <p className="text-center text-muted"> Proyecto con fines educativos, desarrollado por Alan Mazunik.</p>
            </footer>
        </div>
    )
}

export default Footer