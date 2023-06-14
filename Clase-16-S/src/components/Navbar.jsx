import React from 'react'
import { routes } from '../utils/routes'
import {Link, useNavigate} from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav>
        {/* Aqui deberan agregar los Links */}
        <h4 onClick={() => navigate(-1)}>↩Back</h4>
        <Link to={routes.home}><h4>Home</h4></Link>
        <Link to={routes.contacts}><h4>Contactos</h4></Link>
    </nav>
  )
}

export default Navbar

