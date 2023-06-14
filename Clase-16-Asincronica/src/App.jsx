import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import About from './Pages/About'
import Faqs from './Pages/Faqs'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import NavBar from './Components/NavBar'
import { routes } from './utils/routes'


function App() {

  return (
    <>
      <NavBar/>
        <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.about} element={<About/>}/>
          <Route path={routes.faqs} element={<Faqs/>}/>
          <Route path={routes.pageNotFound} element={<PageNotFound/>}/> 
        </Routes>
    </>
  )
}

export default App
