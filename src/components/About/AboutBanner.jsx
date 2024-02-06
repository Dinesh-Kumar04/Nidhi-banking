import React from 'react'

const AboutBanner = (props) => {
    console.log(props.imageUrl)
    return (
        <div className="about-banner">
            <img src={props.imageUrl} alt={props.imageAlt} />
            <h4>{props.h4}</h4>
        </div>
    )
}

export default AboutBanner
