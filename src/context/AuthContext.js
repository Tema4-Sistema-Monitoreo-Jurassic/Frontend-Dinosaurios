import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authData, setAuthData] = useState({
        isAuthenticated: false,
        token: null,
        role: null,
    });
    const [loading, setLoading] = useState(false);

    const login = (data) => {
        setLoading(true); // Empezamos a cargar
        setAuthData({
            isAuthenticated: true,
            token: data.token,
            role: data.role,
        });
        setLoading(false); // Terminamos de cargar
    };

    const logout = () => {
        setAuthData({
            isAuthenticated: false,
            token: null,
            role: null,
        });
    };

    return (
        <AuthContext.Provider value={{ authData, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
