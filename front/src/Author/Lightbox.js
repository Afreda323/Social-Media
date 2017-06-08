import React from 'react'

const Lightbox = (props) => {
  return (
    <div className='lightbox' onClick={props.onClick}>
      <img className='lightbox-img' src={props.src} alt='User avatar'/>
    </div>
  )
}

export default Lightbox
