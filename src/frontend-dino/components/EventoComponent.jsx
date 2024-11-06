// EventoComponent.jsx
import React, { useEffect, useState } from 'react';
import eventoService from '../services/eventoService';

function EventoComponent() {
    const [eventos, setEventos] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const dataPerPage = 9;

    useEffect(() => {
        fetchAllEventos();
    }, []);

    const fetchAllEventos = () => {
        eventoService.fetchEventos()
            .then((data) => setEventos(data))
            .catch((error) => console.error('Error al cargar eventos:', error));
    };

    const paginatedData = eventos.slice(currentPage * dataPerPage, (currentPage + 1) * dataPerPage);

    const goToNextPage = () => {
        if ((currentPage + 1) * dataPerPage < eventos.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const processAllEventos = () => {
        eventos.forEach(evento => {
            eventoService.processEvento(evento.id)
                .then(() => console.log(`Evento ${evento.id} procesado`))
                .catch(error => console.error('Error al procesar evento:', error));
        });
    };

    const processSingleEvento = (id) => {
        eventoService.processEvento(id)
            .then(() => {
                alert(`Evento con ID ${id} procesado`);
                fetchAllEventos();
            })
            .catch(error => console.error('Error al procesar evento:', error));
    };

    if (!eventos.length) {
        return <p style={styles.noData}>No hay eventos disponibles.</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Gestión de Eventos</h1>
            <button style={styles.button} onClick={processAllEventos}>Procesar Todos los Eventos</button>

            <div style={styles.cardContainer}>
                {paginatedData.map((evento) => (
                    <div style={styles.card} key={evento.id}>
                        <h2 style={styles.subtitle}>Mensaje: {evento.mensaje}</h2>
                        <p style={styles.info}>Valor: {evento.valor}</p>
                        <div style={styles.buttonGroup}>
                            <button style={styles.buttonSecondary} onClick={() => processSingleEvento(evento.id)}>Procesar</button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.pagination}>
                <button style={styles.navButton} onClick={goToPreviousPage} disabled={currentPage === 0}>
                    Anterior
                </button>
                <button style={styles.navButton} onClick={goToNextPage} disabled={(currentPage + 1) * dataPerPage >= eventos.length}>
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
        backgroundColor: '#f9f9f9',
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
        backgroundColor: '#e67e22',
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

export default EventoComponent;
