import { useState } from 'react'
import './App.css'
import { Link} from 'react-router-dom'


function App() {

  return (
    <>
      <nav>
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
        <Link to="/faqs ">Faqs</Link>
        </div>
      </nav>
    </>
  )
}

export default App
