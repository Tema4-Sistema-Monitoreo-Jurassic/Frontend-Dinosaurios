import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import { useParams } from 'react-router-dom';
import '../styles/spinner.css';

function IslaPage() {
    const { id } = useParams();
    const [isla, setIsla] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            getIsla(id)
                .then(response => {
                    setIsla(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error al obtener la isla:', error);
                    setLoading(false);
                });
        };

        fetchData();
        const intervalId = setInterval(() => {
            window.location.reload();
        }, 7000);

        return () => clearInterval(intervalId);
    }, [id]);

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
                <p>Cargando el tablero...</p>
            </div>
        );
    }

    return (
        <div className="islapage">
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