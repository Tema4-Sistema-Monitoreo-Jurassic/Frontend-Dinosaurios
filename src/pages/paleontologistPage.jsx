import React, { useEffect, useState } from 'react';
import { getDinosauriosConDatos } from '../services/apiService';

function PaleontologistPage() {
    const [dinosaurios, setDinosaurios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDinosauriosConDatos()
            .then(response => {
                setDinosaurios(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener dinosaurios con datos:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Cargando dinosaurios...</div>;
    }

    if (dinosaurios.length === 0) {
        return <div className="loading">No hay dinosaurios con datos disponibles en este momento.</div>;
    }

    return (
        <div className="tabla-container">
            <style>{`
                .tabla-container {
                    display: flex;
                    justify-content: center;
                    padding: 20px;
                    background-color: #0d0d0d;
                    min-height: 100vh;
                    align-items: center;
                }
                .tabla-dinosaurios {
                    width: 80%;
                    border-collapse: collapse;
                    font-family: 'Verdana', sans-serif;
                    color: #fff;
                    background-color: #333;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
                    border: 2px solid #666;
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
                .loading {
                    color: #fff;
                    text-align: center;
                    padding: 20px;
                }
            `}</style>
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
    );
}

export default PaleontologistPage;
