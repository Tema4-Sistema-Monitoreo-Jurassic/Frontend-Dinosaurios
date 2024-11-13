import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import { useParams, Link } from 'react-router-dom';
import '../styles/spinner.css';
import '../styles/isla.css';

function IslaPage() {
    const { id } = useParams();
    const [isla, setIsla] = useState(null);
    const [loading, setLoading] = useState(false);

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

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => {
            setLoading(true);
            setTimeout(() => {
                fetchData();
            }, 2000);
        }, 9000); // Refresh every 25 seconds

        return () => clearInterval(intervalId);
    }, [id]);

    return (
        <div className="islapage">
            <Link to="/user" className="back-button">Regresar</Link>
            {loading ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <table>
                    <tbody>
                    {isla && isla.tablero && isla.tablero.map((fila, indexFila) => (
                        <tr key={indexFila}>
                            {fila.map((celda, indexCelda) => (
                                <td key={indexCelda} className={celda === 1 ? 'occupied' : ''}></td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default IslaPage;