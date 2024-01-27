import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
      <h2>DemoApp</h2>
      <div className="nav-links">
        <Link to='/'>
          <h4><i class="fa fa-home" aria-hidden="true" /> Home</h4>
        </Link>
        <Link to='/about'>
          <h4>About</h4>
        </Link>
        <Link>
          <h4>Services</h4>
        </Link>
        <Link>
          <h4>Advances</h4>
        </Link>
        <Link>
          <h4>Deposit</h4>
        </Link>
        <Link>
          <h4>Interest</h4>
        </Link>
        <Link>
          <h4>Download</h4>
        </Link>
        <Link>
          <h4>Contact Us</h4>
        </Link>
      </div>
    </div>
  )
}

export default navbar
