// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import PaleontologistPage from './components/PaleontologistPage';
import IslaPage from './pages/IslaPage';
import CriaderoPage from './pages/CriaderoPage';
import EnfermeriaPage from './pages/EnfermeriaPage';

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
