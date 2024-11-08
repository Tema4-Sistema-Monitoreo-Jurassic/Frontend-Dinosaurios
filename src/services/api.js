// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Cambia el puerto si es necesario

export const createDinosaur = (dinosaurio) => {
    return axios.post(`${API_BASE_URL}/dinosaurios`, dinosaurio);
};

export const getEvents = () => {
    return axios.get(`${API_BASE_URL}/eventos`);
};

export const getIsla = (id) => {
    return axios.get(`${API_BASE_URL}/islas/${id}`);
};

// Otros métodos si es necesario...
