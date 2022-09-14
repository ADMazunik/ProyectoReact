import React from 'react'
import './Loader.css'

const Loader = ({ saludo }) => {
    return (
        <div className='d-flex flex-column align-items-center mt-5'>
            <div className="spinner-border text-white spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h2 className='text-white mt-5'>{saludo}</h2>
        </div>
    )
}

export default Loader