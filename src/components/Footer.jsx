import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-links">
        <Link to='/'>
          <h4>HOME</h4>
        </Link>
        <Link to='/'>
          <h4>ABOUT</h4>
        </Link>
        <Link to='/'>
          <h4>SERVICES</h4>
        </Link>
        <Link to='/'>
          <h4>DEPOSIT</h4>
        </Link>
        <Link to='/'>
          <h4>INTEREST</h4>
        </Link>
        <Link to='/'>
          <h4>BANK HISTORY</h4>
        </Link>
        <Link to='/'>
          <h4>EMI CALCULATOR</h4>
        </Link>
        <Link to='/'>
          <h4>DEPOSIT CALCULATOR</h4>
        </Link>
        <Link to='/'>
          <h4>PRIVACY POLICY</h4>
        </Link>
      </div>
      <div className="footer-info">
        <div className="footer-info-box">
          <div className="footer-box-1">
            <h4>Address:</h4>
            <p id='address'>SO-15, 3rd floor, Magneto Offizo, Jivan Vihar, Labhandih, Raipur, Chhattisgarh 492001</p>
            <h4>Contact:</h4>
            <p><i class="fa fa-phone" aria-hidden="true" /> 25857901 <i class="fa fa-phone" aria-hidden="true" /> 25861907 <i class="fa fa-phone" aria-hidden="true" /> 25851333</p>
            <h4>Email:</h4>
            <p><i class="fa fa-envelope" aria-hidden="true" /> info@company name.co.in</p>
          </div>
          <div className="footer-box-2">
            <img src="images/landing/QR-Code.jpeg" alt="QR-Code" />
            <img src="images/landing/Mono.jpeg" alt="Mono" />
          </div>
        </div>
        <div className="footer-company-details">
          <h4>DemoApp Pvt Ltd. is registered with DICGC(https://www.dicgc.org)</h4>
        </div>
      </div>
      <div className="footer-copyright">
        <h4>@DemoApp Pvt Ltd. All Rights are Reserved | Powered By : Railworld India pvt ltd</h4>
      </div>
    </div>
  )
}

export default footer
