// IslaComponent.jsx
import React, { useEffect, useState } from 'react';
import islaService from '../services/islaService';

function IslaComponent() {
    const [islas, setIslas] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const dataPerPage = 6;

    useEffect(() => {
        fetchAllIslas();
    }, []);

    const fetchAllIslas = () => {
        islaService.fetchIslas()
            .then((data) => setIslas(data))
            .catch((error) => console.error('Error al cargar islas:', error));
    };

    const paginatedData = islas.slice(currentPage * dataPerPage, (currentPage + 1) * dataPerPage);

    const goToNextPage = () => {
        if ((currentPage + 1) * dataPerPage < islas.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const simulateAllIslas = () => {
        islas.forEach(isla => {
            islaService.simulateIsla(isla.id)
                .then(() => console.log(`Simulación iniciada para la isla ${isla.id}`))
                .catch(error => console.error('Error al iniciar simulación:', error));
        });
    };

    const simulateSingleIsla = (id) => {
        islaService.simulateIsla(id)
            .then(() => {
                alert(`Simulación iniciada para la isla con ID ${id}`);
                fetchAllIslas();
            })
            .catch(error => console.error('Error al iniciar simulación:', error));
    };

    if (!islas.length) {
        return <p style={styles.noData}>No hay islas disponibles.</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Gestión de Islas</h1>
            <button style={styles.button} onClick={simulateAllIslas}>Simular Todas las Islas</button>

            <div style={styles.cardContainer}>
                {paginatedData.map((isla) => (
                    <div style={styles.card} key={isla.id}>
                        <h2 style={styles.subtitle}>Nombre: {isla.nombre}</h2>
                        <p style={styles.info}>Capacidad Máxima: {isla.capacidadMaxima}</p>
                        <p style={styles.info}>Número de Dinosaurios: {isla.dinosaurios.length}</p>
                        <div style={styles.buttonGroup}>
                            <button style={styles.buttonSecondary} onClick={() => simulateSingleIsla(isla.id)}>Simular</button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.pagination}>
                <button style={styles.navButton} onClick={goToPreviousPage} disabled={currentPage === 0}>
                    Anterior
                </button>
                <button style={styles.navButton} onClick={goToNextPage} disabled={(currentPage + 1) * dataPerPage >= islas.length}>
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
        backgroundColor: '#e8f6f3',
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
        backgroundColor: '#1abc9c',
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
        backgroundColor: '#16a085',
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
        backgroundColor: '#148f77',
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

export default IslaComponent;
