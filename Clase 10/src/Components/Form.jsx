import React from 'react'

const Form = ({setCumple, setStyles }) => {
  return (
    <div>
        <label>Nombre del que cumple:</label>
        <input type="text" onChange={(e)=> setCumple((estadoAnterior)=>({...estadoAnterior, nombre: e.target.value}))}/>

        <label>Fecha:</label>
        <input type="date" onChange={(e)=> setCumple((estadoAnterior)=>({...estadoAnterior, fecha: e.target.value}))} />

        <label>Nombre del invitado</label>
        <input type="text" onChange={(e)=> setCumple((estadoAnterior)=>({...estadoAnterior, invitado: e.target.value}))}/>
        
        
        <label>Fondo:</label>
        <select onChange={(e)=>setStyles((prevStyles)=>({...prevStyles, background: e.target.value}))}>
          <option value="transparent">transparent</option>
          <option value="black">black</option>
          <option value="yellow">yellow</option>
          <option value="red">red</option>
          <option value="pink">pink</option>
          <option value="orange">orange</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
        <label>color de letra:</label>
        <select onChange={(e)=>setStyles((prevStyles)=>({...prevStyles, color: e.target.value}))}>
          <option value="white">white</option>
          <option value="black">black</option>
          <option value="yellow">yellow</option>
          <option value="red">red</option>
          <option value="pink">pink</option>
          <option value="orange">orange</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>

    </div>
  )
}

export default Form
