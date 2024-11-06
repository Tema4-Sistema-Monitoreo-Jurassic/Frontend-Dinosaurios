// src/components/DinosaurForm.jsx
import React, { useState } from 'react';
import { createDinosaur } from '../services/api';
import '../styles/styles.css';

function DinosaurForm() {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('carnivoro');
    const [habitat, setHabitat] = useState('terrestre');
    const [islaId, setIslaId] = useState('');
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dinosaurio = {
            id: null,
            nombre: nombre,
            edad: 0,
            tipo: tipo,
            habitat: habitat,
            sensores: [],
            posicion: {
                x: positionX,
                y: positionY,
                zona: habitat,
            },
            islaId: islaId,
        };
        createDinosaur(dinosaurio)
            .then(response => {
                alert('Dinosaurio creado exitosamente');
                // Limpiar el formulario
                setNombre('');
                setTipo('carnivoro');
                setHabitat('terrestre');
                setIslaId('');
                setPositionX(0);
                setPositionY(0);
            })
            .catch(error => {
                console.error('Error al crear el dinosaurio:', error);
                alert('Error al crear el dinosaurio');
            });
    };

    return (
        <form className="dino-form" onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div>
                <label>Tipo:</label>
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="carnivoro">Carnívoro</option>
                    <option value="herbivoro">Herbívoro</option>
                    <option value="omnivoro">Omnívoro</option>
                </select>
            </div>
            <div>
                <label>Hábitat:</label>
                <select value={habitat} onChange={(e) => setHabitat(e.target.value)}>
                    <option value="terrestre">Terrestre</option>
                    <option value="acuatico">Acuático</option>
                    <option value="volador">Volador</option>
                </select>
            </div>
            <div>
                <label>ID de Isla:</label>
                <input type="text" value={islaId} onChange={(e) => setIslaId(e.target.value)} required />
            </div>
            <div>
                <label>Posición X:</label>
                <input type="number" value={positionX} onChange={(e) => setPositionX(parseInt(e.target.value))} required />
            </div>
            <div>
                <label>Posición Y:</label>
                <input type="number" value={positionY} onChange={(e) => setPositionY(parseInt(e.target.value))} required />
            </div>
            <button type="submit">Crear Dinosaurio</button>
        </form>
    );
}

export default DinosaurForm;
