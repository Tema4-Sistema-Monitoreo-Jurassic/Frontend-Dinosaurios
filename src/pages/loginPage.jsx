// LoginPage.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/apiService';
import '../styles/login.css';

function LoginPage() {
    const [nombreOrCorreo, setNombreOrCorreo] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginRequest = {
            nombreOrCorreo,
            password,
        };

        loginUser(loginRequest)
            .then(response => {
                if (response.token) {
                    login({
                        token: response.token,
                        role: response.role,
                    });

                    switch (response.role) {
                        case 'ADMINISTRADOR':
                            navigate('/admin');
                            break;
                        case 'PALEONTOLOGO':
                            navigate('/paleontologist');
                            break;
                        case 'USUARIO':
                            navigate('/user');
                            break;
                        default:
                            navigate('/');
                            break;
                    }
                } else {
                    alert('Error en la autenticación');
                }
            })
            .catch(error => {
                console.error('Error al iniciar sesión:', error);
                alert('Credenciales incorrectas');
            });
    };

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
