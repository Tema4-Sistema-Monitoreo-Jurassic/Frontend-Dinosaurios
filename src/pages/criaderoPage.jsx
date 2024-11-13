import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import { useParams, Link } from 'react-router-dom';
import '../styles/spinner.css';
import '../styles/isla.css';

function CriaderoPage() {
    const { id } = useParams();
    const [criadero, setCriadero] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        setLoading(true);
        getIsla(id)
            .then(response => {
                setCriadero(response.data);
                setTimeout(() => setLoading(false), 2000); // Spinner effect lasts 2 seconds
            })
            .catch(error => {
                console.error('Error al obtener el criadero:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => {
            window.location.reload();
        }, 9000); // Recargar cada 25 segundos

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
        <div className="criaderopage">
            <Link to="/user" className="back-button">Regresar</Link> {/* Botón de regreso */}
            <table>
                <tbody>
                {criadero.tablero && criadero.tablero.map((fila, indexFila) => (
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

export default CriaderoPage;