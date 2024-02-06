import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/Navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
      <h2>DemoApp</h2>
      <div className="nav-links">
        <NavLink to='/'><i class="fa fa-home" aria-hidden="true" /> Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/advances'>Advances</NavLink>
        <NavLink to='/deposit'>Deposit</NavLink>
        <NavLink to='/interest'>Interest</NavLink>
        <NavLink to='/download'>Download</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
      </div>
    </div>
  )
}

export default navbar
