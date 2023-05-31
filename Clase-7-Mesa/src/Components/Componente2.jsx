import React, { Fragment } from 'react'

const Componente2 = ({boton}) => {
  return (
    <>
    <div>Componente2</div>
    <div>
      {boton.map((bot, index) => <ul key={index}><li>{bot}</li></ul>)}
    </div>
    </>
  )
}

export default Componente2