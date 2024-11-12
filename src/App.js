// src/App.js
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import PaleontologistPage from './pages/PaleontologistPage';
import Footer from './components/Footer';

function App() {
    const { authData } = useContext(AuthContext);

    // Log para verificar el estado de autenticación en cada renderizado
    useEffect(() => {
        console.log("Estado de authData:", authData);
    }, [authData]);

    return (
        <Router>
            <Routes>
                {/* Redirige a la página de inicio de sesión o, si está autenticado, a la ruta actual */}
                <Route
                    path="/"
                    element={
                        authData.isAuthenticated ? (
                            <Navigate to="/user" replace /> // Puedes ajustar esta ruta si quieres una ruta específica de inicio al autenticarse
                        ) : (
                            <LoginPage />
                        )
                    }
                />

                {/* Rutas autenticadas sin comprobación de roles */}
                <Route
                    path="/user"
                    element={
                        authData.isAuthenticated ? (
                            <UserPage />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
                <Route
                    path="/admin"
                    element={
                        authData.isAuthenticated ? (
                            <AdminPage />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
                <Route
                    path="/paleontologist"
                    element={
                        authData.isAuthenticated ? (
                            <PaleontologistPage />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
            </Routes>
            {authData.isAuthenticated && <Footer />}
        </Router>
    );
}

export default App;
