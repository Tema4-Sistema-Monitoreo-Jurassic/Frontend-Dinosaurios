// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Cambiar si es necesario

export const createDinosaur = (tipo, dinosaurio) => {
    return axios.post(`${API_BASE_URL}/dinosaurios`, dinosaurio);
};

export const getEvents = () => {
    return axios.get(`${API_BASE_URL}/eventos`);
};

export const getIsla = (id) => {
    return axios.get(`${API_BASE_URL}/islas/${id}`);
};

// Agregar más funciones de API si es necesario
