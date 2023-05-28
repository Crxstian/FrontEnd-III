import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import miImagen from '../public/mario.jpg'

function App() {
  const [count, setCount] = useState(0)
  const elementos = ['lol','pubg','csgo','dota'];
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel='noreferrer'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Empezando con vite y React!!
      </p>
        <img src={miImagen} />
    </>
  )
}

export default App
