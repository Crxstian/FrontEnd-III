import './App.css'
import RickAndMorty from './Pages/RickAndMorty'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'
import { routes } from './utils/routes'
import Character from './Pages/Character'
import Layout from './Layout/Layout'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path={routes.about} element={<About/>}/>
          <Route path={routes.characters} element={<RickAndMorty/>}/>
          <Route path={routes.singleCharacter} element={<Character/>}/>
          <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
