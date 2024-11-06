// src/components/EventList.jsx
import React from 'react';

function EventList({ eventos }) {
    return (
        <ul>
            {eventos.map(evento => (
                <li key={evento.id}>
                    {evento.mensaje} - Valor: {evento.valor}
                </li>
            ))}
        </ul>
    );
}

export default EventList;
