import React from 'react'



const Form = ({setDatos,handleSubmit,mostrar}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" onChange={(e)=> setDatos((estadoAnterior)=>({...estadoAnterior, nombre: e.target.value}))}/>

        <label>Apellido:</label>
        <input type="text" onChange={(e)=> setDatos((estadoAnterior)=>({...estadoAnterior, apellido: e.target.value}))} />

        <label>Edad</label>
        <input type="number" onChange={(e)=> setDatos((estadoAnterior)=>({...estadoAnterior, edad: e.target.value}))}/>

        <label>Comida Favorita</label>
        <input type="text" onChange={(e)=> setDatos((estadoAnterior)=>({...estadoAnterior, comida: e.target.value}))}/>
        <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form