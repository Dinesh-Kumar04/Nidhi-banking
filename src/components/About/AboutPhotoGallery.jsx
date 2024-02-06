import React from 'react'
import AboutBanner from './AboutBanner'
import AboutSideNav from './AboutSideNav'

const AboutPhotoGallery = () => {
  return (
    <div className='about-container'>
            <AboutBanner imageUrl='images/about/banner-5.png' h4="Photo Gallery" imageAlt='about-banner-image' />
            <div className="about-section-2">
                <AboutSideNav />
                <div className="about-company-section">
                    <img src="" alt="Gallery-img-1" />
                    <img src="" alt="Gallery-img-2" />
                    <img src="" alt="Gallery-img-3" />
                    <img src="" alt="Gallery-img-4" />
                    <img src="" alt="Gallery-img-5" />
                </div>
            </div>
        </div>
  )
}

export default AboutPhotoGallery
