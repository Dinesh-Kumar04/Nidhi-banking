import React from 'react'
import AboutBanner from './AboutBanner'
import AboutSideNav from './AboutSideNav'

const AboutKnowYourBank = () => {
    return (
        <div className='about-container'>
            <AboutBanner imageUrl='images/about/banner-6.png' h4="Know Your Bank" imageAlt='about-banner-image' />
            <div className="about-section-2">
                <AboutSideNav />
                <div className="about-company-section">
                    <table>
                        <tr>
                            <td>31-03-2018</td>
                            <td>571.37</td>
                            <td>1887.84</td>
                        </tr>
                        <tr>
                            <td>31-03-2018</td>
                            <td>571.37</td>
                            <td>1887.84</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AboutKnowYourBank
