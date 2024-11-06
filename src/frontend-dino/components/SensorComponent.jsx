// SensorComponent.jsx
import React, { useEffect, useState } from 'react';
import sensorService from '../services/sensorService';

function SensorComponent() {
    const [sensores, setSensores] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const dataPerPage = 9;

    useEffect(() => {
        fetchAllSensores();
    }, []);

    const fetchAllSensores = () => {
        sensorService.fetchSensores()
            .then((data) => setSensores(data))
            .catch((error) => console.error('Error al cargar sensores:', error));
    };

    const paginatedData = sensores.slice(currentPage * dataPerPage, (currentPage + 1) * dataPerPage);

    const goToNextPage = () => {
        if ((currentPage + 1) * dataPerPage < sensores.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const simulateAllSensores = () => {
        sensores.forEach(sensor => {
            sensorService.simulateSensor(sensor.id)
                .then(() => console.log(`Simulación iniciada para el sensor ${sensor.id}`))
                .catch(error => console.error('Error al iniciar simulación:', error));
        });
    };

    const simulateSingleSensor = (id) => {
        sensorService.simulateSensor(id)
            .then(() => {
                alert(`Simulación iniciada para el sensor con ID ${id}`);
                fetchAllSensores();
            })
            .catch(error => console.error('Error al iniciar simulación:', error));
    };

    if (!sensores.length) {
        return <p style={styles.noData}>No hay sensores disponibles.</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Gestión de Sensores</h1>
            <button style={styles.button} onClick={simulateAllSensores}>Simular Todos los Sensores</button>

            <div style={styles.cardContainer}>
                {paginatedData.map((sensor) => (
                    <div style={styles.card} key={sensor.id}>
                        <h2 style={styles.subtitle}>Tipo: {sensor.tipo}</h2>
                        <p style={styles.info}>Límite Inferior: {sensor.limiteInferior}</p>
                        <p style={styles.info}>Límite Superior: {sensor.limiteSuperior}</p>
                        <div style={styles.buttonGroup}>
                            <button style={styles.buttonSecondary} onClick={() => simulateSingleSensor(sensor.id)}>Simular</button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.pagination}>
                <button style={styles.navButton} onClick={goToPreviousPage} disabled={currentPage === 0}>
                    Anterior
                </button>
                <button style={styles.navButton} onClick={goToNextPage} disabled={(currentPage + 1) * dataPerPage >= sensores.length}>
                    Siguiente
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: '20px',
    },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#fcf8e8',
        color: 'black',
    },
    subtitle: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    info: {
        fontSize: '18px',
        marginBottom: '10px',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        padding: '10px 20px',
        fontSize: '18px',
        backgroundColor: '#f39c12',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonSecondary: {
        padding: '8px 15px',
        fontSize: '16px',
        backgroundColor: '#e67e22',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    navButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#d35400',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        margin: '0 10px',
        transition: 'background-color 0.3s',
    },
    noData: {
        fontSize: '20px',
        color: '#c0392b',
        textAlign: 'center',
    },
};

export default SensorComponent;
