// src/components/AdminPage.jsx
import React from 'react';
import DinosaurForm from './DinosaurForm';

function AdminPage() {
    return (
        <div>
            <h1>Página de Administrador</h1>
            <p>Crear un nuevo dinosaurio:</p>
            <DinosaurForm />
        </div>
    );
}

export default AdminPage;
