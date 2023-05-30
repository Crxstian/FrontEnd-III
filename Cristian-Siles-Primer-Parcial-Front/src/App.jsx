import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Form/>
      <Card/>
    </>
  )
}

export default App
