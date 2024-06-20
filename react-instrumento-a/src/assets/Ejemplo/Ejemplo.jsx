import React from 'react'
import { useState } from 'react';

export const Ejemplo = () => {
    const [name, setName] = useState('');

  // Función para manejar el cambio en el input
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hola, ${name}!`);
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Your name is: {name}</p>
    </div>
  );
}
