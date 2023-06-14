import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'

const NavBar = () => {

const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='links'>
        <h4 onClick={()=>navigate(-1)}>Back</h4>
        <Link to={routes.home}><h4 className='link'>Home</h4></Link>
        <Link to={routes.about}><h4 className='link'>About</h4></Link>
        <Link to={routes.faqs}><h4 className='link'>Faqs</h4></Link>
      </div>
    </div>
    
  )
}

export default NavBar