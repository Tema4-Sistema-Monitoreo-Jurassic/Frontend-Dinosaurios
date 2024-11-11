// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Cambia el puerto si es necesario

export const createDinosaur = (dinosaurio) => {
    return axios.post(`${API_BASE_URL}/dinosaurios`, dinosaurio);
};


export const loginUser = async (loginRequest) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, loginRequest);
        return response.data;
    } catch (error) {
        console.error('Error en el login:', error);
        throw error;
    }
};

export const registerUser = (registerData) => {
    return axios.post(`${API_BASE_URL}/api/auth/register`, registerData);
};

// Otros métodos si es necesario...


export const getEvents = () => {
    return axios.get(`${API_BASE_URL}/eventos`);
};

export const getIsla = (id) => {
    return axios.get(`${API_BASE_URL}/islas/${id}`);
};

// Otros métodos si es necesario...
