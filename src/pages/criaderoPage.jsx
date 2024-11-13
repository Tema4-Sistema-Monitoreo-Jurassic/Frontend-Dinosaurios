import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import { useParams, Link } from 'react-router-dom';
import '../styles/spinner.css';
import '../styles/isla.css';

function CriaderoPage() {
    const { id } = useParams();
    const [criadero, setCriadero] = useState(null);
    const [loadingData, setLoadingData] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = () => {
        setLoadingData(true);
        getIsla(id)
            .then(response => {
                setCriadero(response.data);
                setLoadingData(false);
            })
            .catch(error => {
                console.error('Error al obtener el criadero:', error);
                setLoadingData(false);
            });
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => {
            setRefreshing(true);
            setTimeout(() => {
                fetchData();
                setRefreshing(false);
            }, 2000);
        }, 9000); // Refresh every 25 seconds

        return () => clearInterval(intervalId);
    }, [id]);

    return (
        <div className="criaderopage">
            <Link to="/user" className="back-button">Regresar</Link>
            {refreshing ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <table>
                    <tbody>
                    {criadero && criadero.tablero && criadero.tablero.map((fila, indexFila) => (
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

export default CriaderoPage;