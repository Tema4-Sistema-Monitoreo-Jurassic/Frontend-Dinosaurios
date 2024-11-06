// src/components/AdminPage.jsx
import React from 'react';
import DinosaurForm from './DinosaurForm';
import '../styles/AdminPage.css';
import '../styles/styles.css';
import '../styles/HeartBeatMonitor.css';
import HeartBeatMonitor from "./HeartBeatMonitor";




function AdminPage() {
    return (
        <div className="adminpage">
            <h1>Página de Administrador</h1>
            <p>Crear un nuevo dinosaurio:</p>
            <HeartBeatMonitor/>
            <DinosaurForm/>
        </div>

    );
}

export default AdminPage;
