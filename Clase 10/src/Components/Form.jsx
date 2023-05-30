import React from 'react'

const Form = ({setCumple}) => {
  return (
    <div>
        <label>Nombre del que cumple:</label>
        <input type="text" onChange={(e)=> setCumple((estadoAnterior)=>({...estadoAnterior, nombre: e.target.value}))}/>

        <label>Fecha:</label>
        <input type="date" onChange={(e)=> setCumple((estadoAnterior)=>({...estadoAnterior, fecha: e.target.value}))} />

        <label>Nombre del invitado</label>
        <input type="text" onChange={(e)=> setCumple((estadoAnterior)=>({...estadoAnterior, invitado: e.target.value}))}/>
    </div>
  )
}

export default Form