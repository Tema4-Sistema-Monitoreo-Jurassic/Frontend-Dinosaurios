// src/components/HeartbeatMonitor.jsx
import React, { useState, useEffect } from 'react';
import '../styles/HeartBeatMonitor.css';

function HeartbeatMonitor() {
    const [heartbeat, setHeartbeat] = useState(80); // Valor inicial

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeartbeat = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
            setHeartbeat(newHeartbeat);
        }, 2000); // Actualizar cada 2 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="heartbeat-monitor">
            <h2>Monitor de Ritmo Cardíaco</h2>
            <img src="/images/heartbeat.gif" alt="Heartbeat Animation" className="heartbeat-gif" />
            <p>Ritmo Cardíaco Actual: {heartbeat} BPM</p>
        </div>
    );
}

export default HeartbeatMonitor;
