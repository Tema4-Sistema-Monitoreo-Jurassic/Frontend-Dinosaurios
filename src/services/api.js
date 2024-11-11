// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Cambia el puerto si es necesario

export const loginUser = (loginRequest) => {
    return axios.post(`${API_BASE_URL}/api/auth/login`, loginRequest);
};

export const createDinosaur = (dinosaurio, token) => {
    return axios.post(`${API_BASE_URL}/dinosaurios`, dinosaurio, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getEvents = (token) => {
    return axios.get(`${API_BASE_URL}/eventos`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getIsla = (id, token) => {
    return axios.get(`${API_BASE_URL}/islas/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Otros métodos si es necesario...
