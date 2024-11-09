// src/components/homepage.jsx
import React from 'react';
import '../styles/homePage.css';

function Homepage() {
    return (
        <div className="homepage">
            <div className="banner-container">
                <img src="/images/j.png" alt="Jurassic Park Banner" className="banner" />
            </div>
            <h1>Bienvenido al Sistema de Monitoreo Jurassic</h1>
            <p>Monitoreo en tiempo real de dinosaurios e islas.</p>
        </div>
    );
}

export default Homepage;
