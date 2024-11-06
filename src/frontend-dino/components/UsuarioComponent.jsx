// UsuarioComponent.jsx
import React, { useEffect, useState } from 'react';
import usuarioService from '../services/usuarioService';

function UsuarioComponent() {
    const [usuarios, setUsuarios] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const dataPerPage = 9;

    useEffect(() => {
        fetchAllUsuarios();
    }, []);

    const fetchAllUsuarios = () => {
        usuarioService.fetchUsuarios()
            .then((data) => setUsuarios(data))
            .catch((error) => console.error('Error al cargar usuarios:', error));
    };

    const paginatedData = usuarios.slice(currentPage * dataPerPage, (currentPage + 1) * dataPerPage);

    const goToNextPage = () => {
        if ((currentPage + 1) * dataPerPage < usuarios.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const createUsuario = (usuarioData) => {
        usuarioService.createUsuario(usuarioData)
            .then(() => {
                alert(`Usuario ${usuarioData.nombre} creado`);
                fetchAllUsuarios();
            })
            .catch(error => console.error('Error al crear usuario:', error));
    };

    const deleteUsuario = (id) => {
        usuarioService.deleteUsuario(id)
            .then(() => {
                alert(`Usuario con ID ${id} eliminado`);
                fetchAllUsuarios();
            })
            .catch(error => console.error('Error al eliminar usuario:', error));
    };

    if (!usuarios.length) {
        return <p style={styles.noData}>No hay usuarios disponibles.</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Gestión de Usuarios</h1>
            <button style={styles.button} onClick={() => createUsuario({
                nombre: "Nuevo Usuario",
                apellido1: "Apellido1",
                apellido2: "Apellido2",
                correo: "correo@ejemplo.com",
                telefono: "123456789",
                direccion: "Dirección de ejemplo",
                rolId: "rol_id",
                credencialesId: "credenciales_id"
            })}>Crear Usuario</button>

            <div style={styles.cardContainer}>
                {paginatedData.map((usuario) => (
                    <div style={styles.card} key={usuario.id}>
                        <h2 style={styles.subtitle}>Nombre: {usuario.nombre} {usuario.apellido1} {usuario.apellido2}</h2>
                        <p style={styles.info}>Correo: {usuario.correo}</p>
                        <p style={styles.info}>Teléfono: {usuario.telefono}</p>
                        <p style={styles.info}>Dirección: {usuario.direccion}</p>
                        <div style={styles.buttonGroup}>
                            <button style={styles.buttonSecondary} onClick={() => deleteUsuario(usuario.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.pagination}>
                <button style={styles.navButton} onClick={goToPreviousPage} disabled={currentPage === 0}>
                    Anterior
                </button>
                <button style={styles.navButton} onClick={goToNextPage} disabled={(currentPage + 1) * dataPerPage >= usuarios.length}>
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
        backgroundColor: '#e8f8f5',
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
        backgroundColor: '#2980b9',
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
        backgroundColor: '#3498db',
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
        backgroundColor: '#1e5a8d',
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

export default UsuarioComponent;
