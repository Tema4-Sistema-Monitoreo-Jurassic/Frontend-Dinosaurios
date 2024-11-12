// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Cambia el puerto si es necesario

export const createDinosaur = (dinosaurio) => {
    return axios.post(`${API_BASE_URL}/dinosaurios`, dinosaurio);
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error en el login:', error);
        throw error;
    }
};

// Cambiar createUser para utilizar el endpoint de registro
export const registerUser = (registerData) => {
    return axios.post(`${API_BASE_URL}/api/auth/register`, registerData);
};

export const getEvents = () => {
    return axios.get(`${API_BASE_URL}/eventos`);
};

export const getIsla = (id) => {
    return axios.get(`${API_BASE_URL}/islas/${id}`);
};

// Llamada al nuevo endpoint para obtener dinosaurios con sus sensores y datos
export const getDinosauriosConDatos = () => {
    return axios.get(`${API_BASE_URL}/dinosaurios/con-datos`);
};

// Otros métodos si es necesario...

