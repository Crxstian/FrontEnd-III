import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <h3>Hola! , Estas Invitado al cumple de {}</h3>
      <h4>Te espero el dia: {} a las {} hs</h4>
      <h2>No faltes!!</h2>
      <h4>Invitacion Para: {}</h4>
    </div>
  )
}

export default Card