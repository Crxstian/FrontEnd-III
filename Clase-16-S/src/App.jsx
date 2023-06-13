import { Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import { routes } from './utils/reoutes'
import Home from './Home'
import Beer from './Beer'

function App() {
  return (
   <div>
    <NavBar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/' element={<Beer/>} />
    </Routes>
    </NavBar>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
   </div>
  )
}

export default App
