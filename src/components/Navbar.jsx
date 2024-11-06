// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/user">Usuario</Link></li>
                <li><Link to="/admin">Administrador</Link></li>
                <li><Link to="/paleontologist">Paleontólogo</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
