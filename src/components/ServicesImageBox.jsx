import React from 'react'

const ServicesImageBox = (props) => {
    return (
        <div className="section-3-img-box" key={props.id}>
            <img src={props.imagePath} alt="" />
        </div>
    )
}

export default ServicesImageBox
