import React from 'react'
import AboutBanner from './AboutBanner'
import AboutSideNav from './AboutSideNav'
import MembersImage from './MembersImage'

const AboutManagement = () => {
    return (
        <div className='about-container'>
            <AboutBanner imageUrl='images/about/banner-3.png' h4="Management" imageAlt='about-banner-image' />
            <div className="about-section-2">
                <AboutSideNav />
                <div className="about-company-section">
                    <MembersImage imageUrl='images/about/member-img.png' imageAlt='Director-img' h6='PRAKASH BHAI D PATEL' h4='MANAGEMENT' />
                    <MembersImage imageUrl='images/about/member-img.png' imageAlt='Director-img' h6='PRAKASH BHAI D PATEL' h4='MANAGEMENT' />
                    <MembersImage imageUrl='images/about/member-img.png' imageAlt='Director-img' h6='PRAKASH BHAI D PATEL' h4='MANAGEMENT' />
                </div>
            </div>
        </div>
    )
}

export default AboutManagement
