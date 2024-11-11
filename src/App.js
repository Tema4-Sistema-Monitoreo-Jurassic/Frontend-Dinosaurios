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
                {/* Página de inicio o redirección según autenticación */}
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
                <Route path="/user" element={<PrivateRoute element={<UserPage />} roles={['USUARIO']} />} />
                <Route path="/admin" element={<PrivateRoute element={<AdminPage />} roles={['ADMINISTRADOR']} />} />
                <Route path="/paleontologist" element={<PrivateRoute element={<PaleontologistPage />} roles={['PALEONTOLOGO']} />} />
                <Route path="/isla/:id" element={<PrivateRoute element={<IslaPage />} roles={['USUARIO', 'ADMINISTRADOR', 'PALEONTOLOGO']} />} />
                <Route path="/criadero/:id" element={<PrivateRoute element={<CriaderoPage />} roles={['USUARIO', 'ADMINISTRADOR', 'PALEONTOLOGO']} />} />
                <Route path="/enfermeria" element={<PrivateRoute element={<EnfermeriaPage />} roles={['USUARIO', 'ADMINISTRADOR', 'PALEONTOLOGO']} />} />
            </Routes>
            {authData.isAuthenticated && <Footer />}
        </Router>
    );
}

function PrivateRoute({ element, roles }) {
    const { authData } = useContext(AuthContext);

    if (!authData.isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (!roles.includes(authData.role)) {
        return <Navigate to="/" replace />;
    }

    return element;
}

export default App;
