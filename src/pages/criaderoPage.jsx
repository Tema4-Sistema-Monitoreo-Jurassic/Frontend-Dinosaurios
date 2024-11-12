import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import { useParams } from 'react-router-dom';

function CriaderoPage() {
    const { id } = useParams();
    const [criadero, setCriadero] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            getIsla(id)
                .then(response => {
                    setCriadero(response.data);
                })
                .catch(error => {
                    console.error('Error al obtener el criadero:', error);
                });
        };

        fetchData(); // Cargar los datos inicialmente
        const intervalId = setInterval(() => {
            window.location.reload();
        }, 7000); // Recargar cada 7 segundos

        return () => clearInterval(intervalId); // Limpiar el intervalo cuando se desmonte
    }, [id]);

    if (!criadero) {
        return <div>Cargando el tablero...</div>;
    }

    return (
        <div className="criaderopage">
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