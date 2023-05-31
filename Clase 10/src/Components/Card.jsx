import React from 'react'

const Card = ({cumple, styles}) => {
  const estilos = {backgroundColor: styles.background, color: styles.color}
  return (
    <div className='card' style={estilos}>
      <h3>Hola! , Estas Invitado al cumple de {cumple.nombre}</h3>
      <h4>Te espero el dia: {cumple.fecha} a las 18 hs</h4>
      <h2>No faltes!!</h2>
      <h4>Invitacion Para: {cumple.invitado}</h4>
    </div>
  )
}

export default Card
