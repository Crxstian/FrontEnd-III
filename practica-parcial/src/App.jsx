import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'
function App() {
  const[datos,setDatos] = useState({
    nombre:'',
    apellido:'',
    edad:0,
    comida:'',
  })
  const[mostrar,setmostrar] = useState(false)
  const[error,setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(datos.nombre.trim().length >= 3 && datos.apellido.length >= 6){
      setmostrar(true)
      setError(false)
    }
    else {
        setError(true)
        setmostrar(false)
      }
  }

  return (
    <>
      <Form setDatos={setDatos} handleSubmit={handleSubmit} mostrar={mostrar}/>
      {mostrar && <Card datos={datos}/>}
      {error && <h3>Por favor chequea que la información sea correcta</h3>  }
    </>
  )
}

export default App
