// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/styles.css';

function Navbar() {
    const { authData, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav>
            <ul>
                {authData.role === 'USUARIO' && <li><Link to="/user">Inicio</Link></li>}
                {authData.role === 'ADMINISTRADOR' && <li><Link to="/admin">Inicio</Link></li>}
                {authData.role === 'PALEONTOLOGO' && <li><Link to="/paleontologist">Inicio</Link></li>}
                <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;
