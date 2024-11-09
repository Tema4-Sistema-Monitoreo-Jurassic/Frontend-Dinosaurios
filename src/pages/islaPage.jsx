import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import { useParams } from 'react-router-dom';

function IslaPage() {
    const { id } = useParams();
    const [isla, setIsla] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            getIsla(id)
                .then(response => {
                    setIsla(response.data);
                })
                .catch(error => {
                    console.error('Error al obtener la isla:', error);
                });
        };

        fetchData(); // Cargar los datos inicialmente
        const intervalId = setInterval(fetchData, 1000); // Actualizar cada segundo

        return () => clearInterval(intervalId); // Limpiar el intervalo cuando se desmonte
    }, [id]);

    if (!isla) {
        return <div>Cargando el tablero...</div>;
    }

    return (
        <div className="islapage">
            <h2>Tablero:</h2>
            <table>
                <tbody>
                {isla.tablero && isla.tablero.map((fila, indexFila) => (
                    <tr key={indexFila}>
                        {fila.map((celda, indexCelda) => (
                            <td key={indexCelda} className={celda === 1 ? 'occupied' : ''}></td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default IslaPage;
