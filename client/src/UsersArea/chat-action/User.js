import React from 'react'

const User = ({ img, name, Active, index }) => {
  return (
    <div className={(Active === index) ? `list-menu active` : `list-menu`}>
      <span className='corner top'></span>
      <div className='user-detaile'>
        <div className='user-dp'>
          <img src={img} alt='' />
        </div>
        <div className='username'>{name}</div>
      </div>
      <span className='corner bottom'></span>
    </div>
  )
}

export default User
