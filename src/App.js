// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import LoginPage from './pages/loginPage';
import UserPage from './pages/userPage';
import AdminPage from './pages/adminPage';
import PaleontologistPage from './pages/paleontologistPage';
import IslaPage from './pages/islaPage';
import CriaderoPage from './pages/criaderoPage';
import EnfermeriaPage from './pages/enfermeriaPage';
import Footer from './components/Footer';

function App() {
    const { authData } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                {/* Redirección a la página correspondiente según el rol */}
                <Route
                    path="/"
                    element={
                        authData.isAuthenticated ? (
                            <Navigate to={`/${authData.role.toLowerCase()}`} replace />
                        ) : (
                            <LoginPage />
                        )
                    }
                />
                {/* Rutas privadas según el rol */}
                <Route path="/user" element={<PrivateRoute component={UserPage} roles={['USUARIO']} />} />
                <Route path="/admin" element={<PrivateRoute component={AdminPage} roles={['ADMINISTRADOR']} />} />
                <Route path="/paleontologist" element={<PrivateRoute component={PaleontologistPage} roles={['PALEONTOLOGO']} />} />
                <Route path="/isla/:id" element={<PrivateRoute component={IslaPage} roles={['USUARIO', 'ADMINISTRADOR', 'PALEONTOLOGO']} />} />
                <Route path="/criadero/:id" element={<PrivateRoute component={CriaderoPage} roles={['USUARIO', 'ADMINISTRADOR', 'PALEONTOLOGO']} />} />
                <Route path="/enfermeria" element={<PrivateRoute component={EnfermeriaPage} roles={['USUARIO', 'ADMINISTRADOR', 'PALEONTOLOGO']} />} />
            </Routes>
            {authData.isAuthenticated && <Footer />}
        </Router>
    );
}

// Componente para verificar roles y autenticación en rutas privadas
function PrivateRoute({ component: Component, roles }) {
    const { authData } = useContext(AuthContext);

    if (!authData.isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (!roles.includes(authData.role)) {
        return <Navigate to="/" replace />;
    }

    return <Component />;
}

export default App;
