import React from 'react'
import { routes } from '../utils/reoutes'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        {/* Aqui deberan agregar los Links */}
        <Link to={routes.home}><h4>Home</h4></Link>
        <Link to={routes.contacts}><h4>Contactos</h4></Link>
    </nav>
  )
}

export default Navbar