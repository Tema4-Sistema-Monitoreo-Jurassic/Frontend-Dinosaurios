// src/pages/LoginPage.jsx
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/apiService';
import '../styles/login.css';

function LoginPage() {
    const [nombreOrCorreo, setNombreOrCorreo] = useState('');
    const [password, setPassword] = useState('');
    const { authData, login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginRequest = { nombreOrCorreo, password };

        try {
            const response = await loginUser(loginRequest);

            if (response.token && response.role) {
                login({
                    token: response.token,
                    role: response.role,
                });
            } else {
                alert('Error en la autenticación: token o rol no recibidos.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Credenciales incorrectas');
        }
    };

    // Redirigir después de que `authData` se actualice y se autentique correctamente
    useEffect(() => {
        if (authData.isAuthenticated) {
            switch (authData.role) {
                case "ADMINISTRADOR":
                    navigate("/admin");
                    break;
                case "PALEONTOLOGO":
                    navigate("/paleontologist");
                    break;
                case "USUARIO":
                    navigate("/user");
                    break;
                default:
                    navigate("/");
                    break;
            }
        }
    }, [authData, navigate]);

    return (
        <div className="login-page">
            <h1>Iniciar Sesión</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de Usuario o Correo:</label>
                    <input
                        type="text"
                        value={nombreOrCorreo}
                        onChange={(e) => setNombreOrCorreo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );


}

export default LoginPage;
