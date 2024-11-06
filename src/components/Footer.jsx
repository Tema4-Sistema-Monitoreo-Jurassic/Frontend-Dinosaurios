// src/components/Footer.jsx
import React from 'react';
import '../styles/styles.css';

function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Sistema de Monitoreo Jurassic</p>
        </footer>
    );
}

export default Footer;
