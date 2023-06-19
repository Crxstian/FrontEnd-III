import React from 'react'

const Card = ({datos}) => {
    const {nombre, apellido, edad, comida} = datos
  return (
    <div>
      <h3>Hola! tu nombre completo es {nombre} {apellido} !!</h3>
      <h4>Tienes {edad} años de edad</h4>
      <h2>Gracias por estar aqui!!</h2>
      <h4>Tu comida favorita es {comida} !! Genial!</h4>
    </div>
  )
}

export default Card