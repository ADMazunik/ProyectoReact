import React from "react";

const Success = ({ id }) => {
    return (
        <div className="container">
            <div className="text-center p-4 text-white bg-vapor">
                <h1 className="fs-1 fw-bold my-3">Felicitaciones!</h1>
                <p className="fs-2 ">La Orden de Compra se generó correctamente con el ID:</p>
                <h1 className="fs-1 fw-bold text-success"><strong>{id}</strong></h1>
                <h2 className="fs-2 mt-3">El breve recibirás un e-mail con los pasos a seguir para recibir tu producto.</h2>
                <h1 className="fs-1 mt-5">¡Muchas Gracias por elegirnos!</h1>
                <h1 className="fs-1 mt-5 text-end">Vapor Gaming</h1>
            </div>
        </div>
    )
}

export default Success;