import React from 'react'

const Card = ({serie}) => {
  const {plataforma , nombre} = serie
  return (
    <div className='card'>
      <h2>Hola, soy una tarjeta</h2>
      <h3>Hola! tu serie Favorita es: {nombre} !!</h3>
      <h4>Y se emiten a travez de: {plataforma}</h4>
    </div>
  )
}

export default Card