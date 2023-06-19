import { Route, Routes} from 'react-router-dom'
import { routes } from './utils/routes'
import Home from './Home'
import Beer from './Beer'
import Contacto from './Contacto'
import NavBar from './components/Navbar'
import Layout from './Layout/Layout'

function App() {
  return (
    <>
    <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
    </div>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path={routes.home} element={<Home/>} />
        <Route path={routes.contacts} element={<Contacto/>} />
        <Route path={routes.beer} element={<Beer/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
