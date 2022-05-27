import React, { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value // forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault ();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <div className="columna contacto left">
                <h2>Complete el siguiente formulario</h2>
                <form action="contato" method="" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar"></input></p>

                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

            </div>
            <div className="columna datos right">
                <h2>Otras vias de contacto</h2>
                <p>lorem no me sale el loremmmmmmmm</p>
                <ul>
                    <li>Telefono:345678890</li>
                    <li>Email:</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Instagram</li>
                </ul>

            </div>

        </main>
    );
}

export default ContactoPage;

//`${process.env.REACT_APP_API_URL}/api/contacto`