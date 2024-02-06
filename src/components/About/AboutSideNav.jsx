import React from 'react'
import {NavLink} from 'react-router-dom'

const AboutSideNav = () => {
    return (
        <div className="about-sidenav">
            <NavLink to='/about'>
                <h4>Bank History</h4>
            </NavLink>
            <NavLink to='/chairman_message'>
                <h4>Chairman's Message</h4>
            </NavLink>
            <NavLink to='/board_of_directors'>
                <h4>Board Of Directors</h4>
            </NavLink>
            <NavLink to='/management'>
                <h4>Management</h4>
            </NavLink>
            <NavLink to='/financial_strength'>
                <h4>Financial Strength</h4>
            </NavLink>
            <NavLink to='/photo_gallery'>
                <h4>Photo Gallery</h4>
            </NavLink>
            <NavLink to='/know_your_bank'>
                <h4>Know Your Bank</h4>
            </NavLink>
        </div>
    )
}

export default AboutSideNav
