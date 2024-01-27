import React from 'react'

const IconBox = (props) => {
    return (
        <div key={props.id} className="section-4-data-box">
            <img src={props.imagePath} alt="Icon-1" />
            <h4>{props.iconTitle}</h4>
            <p>{props.iconParaTag}</p>
        </div>
    )
}

export default IconBox
