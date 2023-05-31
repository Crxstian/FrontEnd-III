import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  const[cumple,setCumple] = useState({
    nombre:'',
    fecha: null,
    invitado:''
  })
  const[styles,setStyles] = useState({
    background: 'transparent',
    color : 'white'
  })

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Form setCumple ={setCumple} setStyles={setStyles}/>
      <Card cumple ={cumple} styles={styles}/>
    </>
  )
}

export default App
