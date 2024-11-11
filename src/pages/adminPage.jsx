// src/components/AdminPage.jsx
import React, { useState } from 'react';
import { registerUser } from '../services/apiService';
import '../styles/adminPage.css';

function AdminPage() {
    const [nombre, setNombre] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [password, setPassword] = useState('');
    const [rolNombre, setRolNombre] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();
        const registerData = {
            nombre,
            apellido1,
            apellido2,
            correo,
            telefono: parseInt(telefono),
            direccion,
            password,
            rolNombre
        };

        registerUser(registerData)
            .then(() => {
                alert('Usuario registrado exitosamente');
                setNombre('');
                setApellido1('');
                setApellido2('');
                setCorreo('');
                setTelefono('');
                setDireccion('');
                setPassword('');
                setRolNombre('user');
            })
            .catch(error => {
                console.error('Error al registrar usuario:', error);
                alert('Error al registrar usuario');
            });
    };

    return (
        <div className="adminpage">
            <h1>Página de Administrador</h1>
            <form className="user-form" onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div>
                    <label>Primer Apellido:</label>
                    <input type="text" value={apellido1} onChange={(e) => setApellido1(e.target.value)} required />
                </div>
                <div>
                    <label>Segundo Apellido:</label>
                    <input type="text" value={apellido2} onChange={(e) => setApellido2(e.target.value)} required />
                </div>
                <div>
                    <label>Correo:</label>
                    <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
                </div>
                <div>
                    <label>Dirección:</label>
                    <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Rol:</label>
                    <select value={rolNombre} onChange={(e) => setRolNombre(e.target.value)}>
                        <option value="admin">Administrador</option>
                        <option value="paleontologist">Paleontólogo</option>
                        <option value="user">Usuario</option>
                    </select>
                </div>
                <button type="submit">Registrar Usuario</button>
            </form>
        </div>
    );
}

export default AdminPage;
