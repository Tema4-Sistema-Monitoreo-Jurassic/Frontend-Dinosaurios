// src/pages/UserPage.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/userPage.css';

function UserPage() {
    const { authData } = useContext(AuthContext);
    console.log("Auth Data en UserPage:", authData);

    return (
        <div className="userpage">
            <div className="banner-container">
                <img src="/images/j.png" alt="Jurassic Park Banner" className="banner" />
            </div>
            <h1>Página de Usuario</h1>
            <p>Seleccione una isla o criadero para visualizar:</p>
            <ul>
                <li><Link to="/isla/1">Isla Acuática</Link></li>
                <li><Link to="/isla/2">Isla Terrestre Aérea</Link></li>
                <li><Link to="/criadero/4">Criadero Acuático</Link></li>
                <li><Link to="/criadero/5">Criadero Terrestre</Link></li>
                <li><Link to="/criadero/6">Criadero Voladores</Link></li>
                <li><Link to="/enfermeria">Enfermería</Link></li>
            </ul>
            <p>Componente cargado correctamente</p>
        </div>
    );
}

export default UserPage;
