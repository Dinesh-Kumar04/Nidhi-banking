import React from 'react'
import AboutBanner from './About/AboutBanner'
import AboutSideNav from './About/AboutSideNav'
import '../css/About.css'

const About = () => {
  return (
    <div className='about-container'>
      <AboutBanner imageUrl='images/about/banner.png' h4='Bank History' imageAlt='bank-history-banner' />
      <div className="about-section-2">
        <AboutSideNav />
        <div className="about-company-section">
          <p>The Bank believes that Customer Delight is the ultimate goal and has a strong belief that customers and all shareholders, wholehearted support, absolute faith and their patronage coupled with hard work of the staff members has been largely responsible for its noteworthy and appreciable growth. The Bank is committed to provide banking services with speed, comfort and convenience. The progress allowed by the bank can be attributed to the collective efforts made by the management and team work of its staff under able guidance of the Board of Directors.</p>
        </div>
      </div>
    </div>
  )
}

export default About
