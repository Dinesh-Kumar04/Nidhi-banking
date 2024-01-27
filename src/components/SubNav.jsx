import React from 'react'
import '../css/SubNav.css'
import {Link} from 'react-router-dom'

const SubNav = () => {
  return (
    <div className='subnav'>
      <div className="searchbox-language">
        <label className='search-btn-1'><i class="fa fa-search" aria-hidden="true" /></label>
        <input type="text" placeholder='Find Your Nearest Branch' />
        <button className='search-btn-2'><i class="fa fa-angle-down" aria-hidden="true" /></button>
        <h4><i class="fa fa-language" aria-hidden="true" /> Language</h4>
        <select name="" id="">
          <option value="">HI</option>
          <option value="">EN</option>
        </select>
      </div>
      <div className="subnav-links">
        <Link to='/rupay_card_offer'>
          <h4><i class="fa fa-credit-card" aria-hidden="true" /> RUPAY CARD OFFER</h4>
        </Link>
        <Link to='/rupay_card_offer'>
          <h4><i class="fa fa-bank" aria-hidden="true" /> UNCLAIMED ACCOUNT</h4>
        </Link>
        <Link to='/rupay_card_offer'>
          <h4><i class="fa fa-commenting" aria-hidden="true" /> FEEDBACK</h4>
        </Link>
      </div>
    </div>
  )
}

export default SubNav
