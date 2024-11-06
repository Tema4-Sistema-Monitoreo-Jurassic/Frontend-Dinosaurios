// src/components/PaleontologistPage.jsx
import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/api';
import EventList from './EventList';
import HeartbeatMonitor from './HeartbeatMonitor';
import '../styles/PalentologistPage.css';

function PaleontologistPage() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        getEvents()
            .then(response => {
                setEventos(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los eventos:', error);
            });
    }, []);

    return (
        <div className="paleopage">
            <h1>Página del Paleontólogo</h1>
            <HeartbeatMonitor />
            <h2>Eventos Generados</h2>
            <EventList eventos={eventos} />
        </div>
    );
}

export default PaleontologistPage;
