import React from 'react'

const MembersImage = (props) => {
  return (
    <div className='about-member-image'>
      <img src={props.imageUrl} alt={props.imageAlt} />
      <h6>{props.h6}</h6>
      <h4>{props.h4}</h4>
    </div>
  )
}

export default MembersImage
