import { useState } from 'react'
import './App.css'
import { Route, Routes, Link} from 'react-router-dom'
import About from './Pages/About'
import Faqs from './Pages/Faqs'
import Home from './Pages/Home'


function App() {

  return (
    <>
      <NavBar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/faqs' element={<Faqs/>} />
          <Route path='*' element={<PageNotFound/>} /> 
        </Routes>
      </NavBar>
    </>
  )
}

export default App
