import react, { useState } from 'react'
import './App.css'
import Componente1 from './Components/Componente1'
import Componente2 from './Components/Componente2'

function App() {
  const[boton,setBoton] = useState([])

  return (
    <>
    <h3>Clase 7 Actividad Mesa 6</h3>
    <Componente1 boton={boton} setBoton={setBoton}/>
    <Componente2 boton={boton}/>
    </>
  )
}

export default App
