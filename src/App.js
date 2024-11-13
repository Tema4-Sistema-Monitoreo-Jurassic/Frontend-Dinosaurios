// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import UserPage from './pages/userPage';
import AdminPage from './pages/adminPage';
import PaleontologistPage from './pages/paleontologistPage';
import IslaPage from './pages/islaPage';
import CriaderoPage from './pages/criaderoPage';
import EnfermeriaPage from './pages/enfermeriaPage';
import LoginPage from "./pages/loginPage";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/user" element={<ProtectedRoute requiredRole="user"><UserPage /> </ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminPage /> </ProtectedRoute>} />
                <Route path="/paleontologist" element={<ProtectedRoute requiredRole="paleontologist"><PaleontologistPage /> </ProtectedRoute>} />
                <Route path="/isla/:id" element={<IslaPage />} />
                <Route path="/criadero/:id" element={<CriaderoPage />} />
                <Route path="/enfermeria" element={<EnfermeriaPage />} />
            </Routes>
        </Router>
    );
}

export default App;
