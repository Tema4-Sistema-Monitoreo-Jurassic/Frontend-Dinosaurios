import React, { useContext, useEffect, useState } from 'react';
import { getDinosauriosConDatos } from '../services/apiService';
import HeartbeatMonitor from '../components/HeartbeatMonitor';
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function PaleontologistPage() {
    const [dinosaurios, setDinosaurios] = useState([]);
    const [loading, setLoading] = useState(true);

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const fetchData = () => {
        setLoading(true);
        getDinosauriosConDatos()
            .then(response => {
                setDinosaurios(response.data);
                setTimeout(() => setLoading(false), 2000); // Spinner effect lasts 2 seconds
            })
            .catch(error => {
                console.error('Error al obtener dinosaurios con datos:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 10000); // Refresh every 25 seconds

        return () => clearInterval(intervalId);
    }, []);

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
                <p>Cargando dinosaurios...</p>
            </div>
        );
    }

    if (dinosaurios.length === 0) {
        return <div className="loading">No hay dinosaurios con datos disponibles en este momento.</div>;
    }

    return (
        <div className="page-container">
            <style>{`
                .page-container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    background-color: #0d0d0d;
                }
                .tabla-container {
                    flex: 3;
                    padding-left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center; /* Center the table container */
                }
                .tabla-dinosaurios {
                    width: 70%;
                    border-collapse: collapse;
                    font-family: 'Verdana', sans-serif;
                    color: #fff;
                    background-color: #333;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
                    border: 2px solid #666;
                    margin: 0 auto; /* Center the table */
                }
                .tabla-dinosaurios th, .tabla-dinosaurios td {
                    border: 1px solid #444;
                    padding: 15px;
                    text-align: left;
                    vertical-align: top;
                    background-color: #2a2a2a;
                }
                .tabla-dinosaurios thead th {
                    background-color: #444;
                    color: #f0c040;
                    font-size: 1.1em;
                    border: 2px solid #666;
                }
                .tabla-dinosaurios div {
                    background-color: #555;
                    padding: 5px;
                    margin: 5px 0;
                    border-left: 5px solid #f0c040;
                    border-radius: 4px;
                    border: 1px solid #444;
                }
                .heartbeat-monitor-container {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .loading {
                    color: #fff;
                    text-align: center;
                    padding: 20px;
                }
                .spinner-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }

                .button1 {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    padding: 10px 20px;
                    color: black;
                    font-size: 16px;
                    cursor: pointer;
                    transition: color 0.3s;
                    text-decoration: none;
                    background-color: #d32f2f;
                    border-radius: 5px;
                    font-weight: bold;
                }

                .button1:hover {
                    color: yellow;
                }
                .spinner {
                    border: 16px solid #f3f3f3;
                    border-top: 16px solid #3498db;
                    border-radius: 50%;
                    width: 120px;
                    height: 120px;
                    animation: spin 2s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>

            <div className="tabla-container">
                <table className="tabla-dinosaurios">
                    <thead>
                    <tr>
                        <th>Tipo de Dinosaurio</th>
                        <th>Tipo de Sensor</th>
                        <th>Últimos Datos</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dinosaurios.map(dino => (
                        <React.Fragment key={dino.id}>
                            <tr>
                                <td rowSpan={dino.sensores.length}>{dino.nombre}</td>
                                <td>{dino.sensores[0].tipo}</td>
                                <td>
                                    {dino.sensores[0].datos.slice(-3).map((dato, idx) => (
                                        <div key={idx}>Valor: {dato.valor}</div>
                                    ))}
                                </td>
                            </tr>
                            {dino.sensores.slice(1).map((sensor, index) => (
                                <tr key={index}>
                                    <td>{sensor.tipo}</td>
                                    <td>
                                        {sensor.datos.slice(-3).map((dato, idx) => (
                                            <div key={idx}>Valor: {dato.valor}</div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
            </div>

            <button onClick={handleLogout} className="button1">Log Out</button>

            <div className="heartbeat-monitor-container">
                <HeartbeatMonitor />
            </div>
        </div>
    );
}

export default PaleontologistPage;