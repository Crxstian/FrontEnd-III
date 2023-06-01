import React from 'react'

const Form = ({setSerie,handleSubmit}) => {
  return (
    <div>
        <h4>Examen Front III Cristian Siles</h4>
        <h3>Que serie te gusta mas y en que plataforma de Streaming se emite?</h3>
        <form onSubmit={handleSubmit} className='form'>
        <label className='label'>Plataforma de Emision:</label>
        <input className='input' type="text" onChange={(e)=> setSerie((estadoAnterior)=>({...estadoAnterior, plataforma: e.target.value}))}/>

        <label>Nombre:</label>
        <input className='input' type="text" onChange={(e)=> setSerie((estadoAnterior)=>({...estadoAnterior, nombre: e.target.value}))} />

        <button className='button'>Enviar</button>
        </form>
    </div>
  )
}

export default Form