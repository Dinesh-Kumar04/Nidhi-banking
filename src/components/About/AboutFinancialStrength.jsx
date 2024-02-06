import React from 'react'
import AboutBanner from './AboutBanner'
import AboutSideNav from './AboutSideNav'

const AboutFinancialStrength = () => {
    return (
        <div className='about-container'>
            <AboutBanner imageUrl='images/about/banner-4.png' h4="Financial Strength" imageAlt='about-banner-image' />
            <div className="about-section-2">
                <AboutSideNav />
                <div className="about-company-section">
                    <table>
                        <tr>
                            <th>Year</th>
                            <th>Share Capital</th>
                            <th>Reserve Fund</th>
                            <th>Deposits</th>
                            <th>Loan</th>
                            <th>Working Capital</th>
                            <th>Profit</th>
                            <th>Dividend (%)</th>
                            <th>Audit Class</th>
                        </tr>
                        <tr>
                            <td>31-03-2018</td>
                            <td>571.37</td>
                            <td>1887.84</td>
                            <td>15424.04</td>
                            <td>7935.99</td>
                            <td>18416.98</td>
                            <td>127</td>
                            <td>12%</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>31-03-2018</td>
                            <td>571.37</td>
                            <td>1887.84</td>
                            <td>15424.04</td>
                            <td>7935.99</td>
                            <td>18416.98</td>
                            <td>127</td>
                            <td>12%</td>
                            <td>A</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AboutFinancialStrength
