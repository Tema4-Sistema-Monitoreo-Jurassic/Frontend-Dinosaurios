// DinosaurioComponent.jsx
import React, { useEffect, useState } from 'react';
import dinosaurioService from '../services/dinosaurioService';

function DinosaurioComponent() {
    const [dinosaurios, setDinosaurios] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const dataPerPage = 9;

    useEffect(() => {
        fetchAllDinosaurios();
    }, []);

    const fetchAllDinosaurios = () => {
        dinosaurioService.fetchDinosaurios()
            .then((data) => setDinosaurios(data))
            .catch((error) => console.error('Error al cargar dinosaurios:', error));
    };

    const paginatedData = dinosaurios.slice(currentPage * dataPerPage, (currentPage + 1) * dataPerPage);

    const goToNextPage = () => {
        if ((currentPage + 1) * dataPerPage < dinosaurios.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const processAllDinosaurios = () => {
        dinosaurios.forEach(dino => {
            dinosaurioService.processDinosaurio(dino.id)
                .then(() => console.log(`Dinosaurio ${dino.id} procesado`))
                .catch(error => console.error('Error al procesar dinosaurio:', error));
        });
    };

    const processSingleDinosaurio = (id) => {
        dinosaurioService.processDinosaurio(id)
            .then(() => {
                alert(`Dinosaurio con ID ${id} procesado`);
                fetchAllDinosaurios();
            })
            .catch(error => console.error('Error al procesar dinosaurio:', error));
    };

    if (!dinosaurios.length) {
        return <p style={styles.noData}>No hay dinosaurios disponibles.</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Sistema de Monitoreo de Dinosaurios</h1>
            <button style={styles.button} onClick={processAllDinosaurios}>Procesar Todos los Dinosaurios</button>

            <div style={styles.cardContainer}>
                {paginatedData.map((dino) => (
                    <div style={styles.card} key={dino.id}>
                        <h2 style={styles.subtitle}>Nombre: {dino.nombre}</h2>
                        <p style={styles.info}>Hábitat: {dino.habitat}</p>
                        <p style={styles.info}>Edad: {dino.edad}</p>
                        <p style={styles.info}>Isla ID: {dino.islaId}</p>
                        <div style={styles.buttonGroup}>
                            <button style={styles.buttonSecondary} onClick={() => processSingleDinosaurio(dino.id)}>Procesar</button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.pagination}>
                <button style={styles.navButton} onClick={goToPreviousPage} disabled={currentPage === 0}>
                    Anterior
                </button>
                <button style={styles.navButton} onClick={goToNextPage} disabled={(currentPage + 1) * dataPerPage >= dinosaurios.length}>
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
        backgroundColor: '#f0ead6',
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
        backgroundColor: '#2ecc71',
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
        backgroundColor: '#2ecc71',
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
        backgroundColor: '#27ae60',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        margin: '0 10px',
        transition: 'background-color 0.3s',
    },
    noData: {
        fontSize: '20px',
        color: '#e74c3c',
        textAlign: 'center',
    },
};

export default DinosaurioComponent;
