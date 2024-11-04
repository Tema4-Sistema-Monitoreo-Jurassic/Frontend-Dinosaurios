import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanzarHechizo from '../../components/LanzarHechizo';

export default function UserPage() {
    const navigate = useNavigate();


    useEffect(() => {
        const storedUser = localStorage.getItem('usuario');
        if (!storedUser) {
            navigate('/login'); // Redirigir al login si no está autenticado
        }






    }, [navigate]);

    ;










const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        height: '100vh',
        backgroundColor: 'transparent !important',
        color: '#F0E6D2',
        fontFamily: '"Cinzel", serif',
        position: 'relative',
        overflowX: 'hidden',
    },

    leftSection: {
        width: '35%',
        zIndex: 2,
    },
    rightSection: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90%',
        zIndex: 2,
    },


    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#B28D42',
        marginBottom: '10px',
    },
    sectionDescription: {
        fontSize: '16px',
        color: '#F0E6D2',
    },

    stopButtonHover: {
        backgroundColor: '#A37D4F', // Color más oscuro en hover
        color: '#F0E6D2', // Color de texto más claro en hover
        transform: 'translateY(-2px)', // Efecto de elevación al hacer hover
        boxShadow: '0 6px 14px rgba(0, 0, 0, 0.3)', // Sombra más profunda en hover
    },
};}
