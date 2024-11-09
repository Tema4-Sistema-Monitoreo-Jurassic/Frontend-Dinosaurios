// src/components/AdminPage.jsx
import React from 'react';
import DinosaurForm from '../components/DinosaurForm';
import '../styles/AdminPage.css';
import '../styles/styles.css';


function AdminPage() {
    return (
        <div className="adminpage">
            <h1>Página de Administrador</h1>
            <p>Crear un nuevo dinosaurio:</p>
            <DinosaurForm />
        </div>
    );
}

export default AdminPage;
