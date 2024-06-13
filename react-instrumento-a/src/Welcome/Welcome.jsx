import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../Card/Card'

export const Welcome = ({ ficha }) => {
  return (
    <>
      <h1>instrumento de evaluación</h1>
      <h2>Ficha: {ficha} </h2>
      <a  className="into" href="">Ingresar</a>
      {/* link para que direccione al componente Card (cambiamos la etiqueta a por Link) */}
    </>
  )
}
