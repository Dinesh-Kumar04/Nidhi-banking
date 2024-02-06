import React from 'react'
import AboutBanner from './AboutBanner'
import AboutSideNav from './AboutSideNav'
import MembersImage from './MembersImage'

const AboutChairman = () => {
  return (
    <div className='about-container'>
      <AboutBanner imageUrl='images/about/banner-1.png' h4="Chairman's Message" imageAlt='about-banner-image' />
      <div className="about-section-2">
        <AboutSideNav />
        <div className="about-company-section">
            <MembersImage imageUrl='images/about/member-img.png' imageAlt='Director-img' h6='SHREE RAMEHBHAI M PATEL' h4='CHAIRMAN'/>
          <p>The cooperative sector has been playing a quintessential role in the development of not only the society but also played a unique and irreplaceable role in the growth and development of the country. In the decade where government is trying to come up with various steps for Financial Inclusion in the economy, we co-operative banks, have already taken our step forward to reach each and every person residing in Urban as well as Rural areas with co-operation of our members.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutChairman
