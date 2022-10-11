import React, { useState, useContext } from "react";
import { CartContext } from "../Context/Context";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import './Checkout.css'
import Success from "../Success/Success";

const Checkout = () => {
    const { cart, clear, cartTotal, totalPrice } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {

            const buyer = { name: nombre, email: email, phone: telefono };
            const items = [];

            cart.forEach(item => {
                items.push({ id: item.id, title: item.title, price: item.price, quantity: item.cantidad });
            });

            const order = { buyer: buyer, items: items, date: serverTimestamp(), total: totalPrice() };

            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(({ id }) => {
                setOrderId(id);
                clear()
            });
        }
    }

    return (
        <div className="container py-5 checkout">
            {cartTotal() > 0 ?
                <div className="row py-5 checkout-bg">
                    <div className="col-md-4 offset-md-2">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label text-light">Nombre</label>
                            <input type="text" className="form-control" id="title" onInput={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-light">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label text-light">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => { sendOrder() }}>Finalizar Orden</button>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-center text-light"> Productos</h5>
                        <table className="table align-self-center">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-start text-light"><img src={item.pictureURL} alt={item.title} title={item.title} width="140" /></td>
                                        <td className="text-start align-middle text-light">{item.title} x {item.cantidad}</td>
                                        <td className="text-end align-middle text-light">${item.cantidad * item.price}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2} className="text-end fw-bold text-light">Total a Pagar</td>
                                    <td className="text-end fw-bold text-light">$ {totalPrice()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                : orderId !== "" ? <Success id={orderId} /> : <div className="alert alert-danger text-center fw-bold fs-2">Lo siento, no se encontraron productos.</div>
            }
        </div>
    )
}

export default Checkout