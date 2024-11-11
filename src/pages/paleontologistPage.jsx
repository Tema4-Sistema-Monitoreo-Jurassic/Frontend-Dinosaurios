// src/pages/PaleontologistPage.jsx
import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/apiService';
import EventList from '../components/EventList';
import '../styles/palentologistPage.css';
import '../styles/heartBeatMonitor.css';
import HeartbeatMonitor from '../components/HeartbeatMonitor';

function PaleontologistPage() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const fetchEvents = () => {
            getEvents()
                .then(response => {
                    setEventos(response.data);
                })
                .catch(error => {
                    console.error('Error al obtener los eventos:', error);
                });
        };

        fetchEvents();
        const intervalId = setInterval(fetchEvents, 1000); // Actualiza cada segundo

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="paleopage">
            <h1>Página del Paleontólogo</h1>
            <h2>Eventos Generados</h2>
            <HeartbeatMonitor />
            <EventList eventos={eventos} />
        </div>
    );
}

export default PaleontologistPage;
