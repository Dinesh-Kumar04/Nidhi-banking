import React from 'react'
import SubNav from './SubNav';
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header' style={{display:'unset'}}>
      <SubNav />
      <Navbar />
    </div>
  )
}

export default Header
