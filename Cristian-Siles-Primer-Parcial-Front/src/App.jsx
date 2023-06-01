import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  const[serie,setSerie] = useState({
    plataforma:'',
    nombre:'',
  })
  const[mostrar,setmostrar] = useState(false)
  const[error,setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(serie.plataforma.trim().length >= 3 && !(/^\s/).test(serie.plataforma)&& serie.nombre.length >= 6){
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
      <div className='App'>
        <h1>Carga de estudiantes</h1>
        <Form setSerie={setSerie} handleSubmit={handleSubmit} mostrar={mostrar}/>
        {mostrar && <Card serie={serie}/>}
        {error && <h3>Por favor chequea que la información sea correcta</h3>  }
      </div>      
    </>
  )
}

export default App
