import React, { useState, useEffect } from 'react';

function HeartbeatMonitor() {
    const [heartbeat, setHeartbeat] = useState(80); // Initial value

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeartbeat = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
            setHeartbeat(newHeartbeat);
        }, 2000); // Update every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="heartbeat-monitor">
            <style>{`
                .heartbeat-monitor {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background-color: rgba(17, 17, 17, 0.9);
                    padding: 15px;
                    border-radius: 8px;
                    text-align: center;
                    width: 150px;
                    z-index: 1000;
                    color: #d32f2f;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
                }

                .heartbeat-monitor h2 {
                    color: #d32f2f;
                    margin-bottom: 10px;
                }

                .heartbeat-gif {
                    width: 100%;
                    max-width: 220px;
                    height: auto;
                    margin: 10px 0;
                }
            `}</style>
            <h2>Monitor de Ritmo Cardíaco</h2>
            <img src="/images/heartbeat.gif" alt="Heartbeat Animation" className="heartbeat-gif"/>
        </div>
    );
}

export default HeartbeatMonitor;