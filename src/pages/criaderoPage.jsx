import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import { useParams, Link } from 'react-router-dom';
import '../styles/spinner.css';
import '../styles/isla.css';

function CriaderoPage() {
    const { id } = useParams();
    const [criadero, setCriadero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            getIsla(id)
                .then(response => {
                    setCriadero(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error al obtener el criadero:', error);
                    setLoading(false);
                });
        };

        fetchData();
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
