// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/homepage';
import UserPage from './pages/userPage';
import AdminPage from './pages/adminPage';
import PaleontologistPage from './pages/paleontologistPage';
import IslaPage from './pages/islaPage';
import CriaderoPage from './pages/criaderoPage';
import EnfermeriaPage from './pages/enfermeriaPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/paleontologist" element={<PaleontologistPage />} />
                <Route path="/isla/:id" element={<IslaPage />} />
                <Route path="/criadero/:id" element={<CriaderoPage />} />
                <Route path="/enfermeria" element={<EnfermeriaPage />} />
            </Routes>
        </Router>
    );
}

export default App;
