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
        return <div>Cargando dinosaurios...</div>;
    }

    if (dinosaurios.length === 0) {
        return <div>No hay dinosaurios con datos disponibles en este momento.</div>;
    }

    return (
        <div className="dinosaurios-con-datos">
            {dinosaurios.map(dino => (
                <div key={dino.id} className="dinosaurio">
                    <h2>{dino.nombre}</h2>
                    <div>
                        <h3>Sensores:</h3>
                        {dino.sensores.length > 0 ? (
                            dino.sensores.map((sensor, index) => (
                                <div key={index} className="sensor">
                                    <h4>{sensor.tipo}</h4>
                                    <ul>
                                        {sensor.datos.slice(-3).map((dato, idx) => (
                                            <li key={idx}>{`Valor: ${dato.valor}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p>No hay datos disponibles para este dinosaurio.</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PaleontologistPage;
