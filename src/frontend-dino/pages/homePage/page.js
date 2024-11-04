/*import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={styles.pageContainer}>
            <div style={styles.topRightContainer}>
                <button style={styles.button} onClick={() => navigate('/login')}>Iniciar Sesión</button>
                <button style={styles.button} onClick={() => navigate('/register')}>Registrar Cuenta</button>
            </div>


            <h1 style={styles.title}>DeNexus</h1>



    );


  const styles = {
    pageContainer: {
        position: 'relative',
        height: '100vh',
        backgroundColor: '#1A1A1D',
        color: '#F0E6D2',
        fontFamily: '"Cinzel", serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    topRightContainer: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        display: 'flex',
        gap: '10px',
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#B28D42',
        textAlign: 'center',
        marginBottom: '50px',
        letterSpacing: '2px',
    },
    button: {
        padding: '12px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        backgroundColor: '#B28D42',
        color: '#1A1A1D',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
        transition: 'background-color 0.3s',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    gridItem: {
        backgroundColor: '#333333',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
        border: '2px solid #B28D42',
        transition: 'transform 0.3s ease-in-out',
    },
    gridItemHover: {
        transform: 'scale(1.05)', // Efecto hover para ampliar ligeramente el contenedor
    },
    gridTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#B28D42',
        marginBottom: '10px',
    },
};)
*/