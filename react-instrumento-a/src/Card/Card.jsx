import React, { useState } from 'react';
import './Card.css';
import imgCard from '../assets/images/Photo.png';

export const Card = () => {
  const [cardColor, setCardColor] = useState('#ffffff'); // Estado para almacenar el color de la tarjeta

  const handleColorChange = (event) => {
    setCardColor(event.target.value); // Actualiza el estado del color de la tarjeta al valor seleccionado por el usuario
  };

  return (
    <>
      <label htmlFor="">Elige el color de la card</label>
      <input type="color" value={cardColor} onChange={handleColorChange} />
      <div className='card' style={{ backgroundColor: cardColor }}> {/* Establece el color de fondo de la tarjeta */}
        <div className="header-card"></div>
        <div className="main-card">
          <img src={imgCard} alt="Photo" />
        </div>
        <div className="footer-card"></div>
      </div>
    </>
  );
};





