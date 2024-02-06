import React from 'react'
import AboutBanner from './AboutBanner'
import AboutSideNav from './AboutSideNav'
import MembersImage from './MembersImage'

const BoardOfDirectors = () => {
    return (
        <div className='about-container'>
            <AboutBanner imageUrl='images/about/banner-2.png' h4="Board Of Directors" imageAlt='about-banner-image' />
            <div className="about-section-2">
                <AboutSideNav />
                <div className="about-company-section">
                    <MembersImage imageUrl='images/about/member-img.png' imageAlt='Director-img' h6='SHRI DILIPKUMAR B RAVAL' h4='DIRECTOR' />
                    <MembersImage imageUrl='images/about/member-img.png' imageAlt='Director-img' h6='SHREE RAMEHBHAI M PATEL' h4='DIRECTOR' />
                    <MembersImage imageUrl='images/about/member-img.png' imageAlt='Director-img' h6='SHREE RAMEHBHAI M PATEL' h4='DIRECTOR' />
                </div>
            </div>
        </div>
    )
}

export default BoardOfDirectors
