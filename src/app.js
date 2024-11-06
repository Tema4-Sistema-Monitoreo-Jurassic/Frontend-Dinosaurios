// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
import PaleontologistPage from './components/PaleontologistPage';
import IslaPage from './components/IslaPage';
import CriaderoPage from './components/CriaderoPage';
import EnfermeriaPage from './components/EnfermeriaPage';

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
