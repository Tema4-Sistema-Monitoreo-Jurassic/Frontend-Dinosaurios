// src/components/userPage.jsx
import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/userPage.css';
import {AuthContext} from "../context/AuthContext";


function UserPage() {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();      // Llama a la función logout del contexto
        navigate('/'); // Redirige a la página de inicio de sesión
    };

    return (
        <div className="userpage">
            <div className="banner-container">
                <img src="/images/j-removebg-preview.png" alt="Jurassic Park Banner" className="banner"/>
            </div>
            <h1>Página de Usuario</h1>
            <button onClick={handleLogout} className="button1"> Log Out</button>
            <p>Seleccione una isla o criadero para visualizar:</p>
            <ul>
                <li><Link to="/isla/1">Isla Acuática</Link></li>
                <li><Link to="/isla/2">Isla Terrestre Aérea</Link></li>
                <li><Link to="/criadero/4">Criadero Acuático</Link></li>
                <li><Link to="/criadero/5">Criadero Terrestre</Link></li>
                <li><Link to="/criadero/6">Criadero Voladores</Link></li>
                <li><Link to="/enfermeria">Enfermería</Link></li>
            </ul>
        </div>
    );
}

export default UserPage;
