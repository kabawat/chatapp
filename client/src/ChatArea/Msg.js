import React from 'react'

const Msg = ({ clas, user_dp, msg }) => {
  return (
    <div className={`${clas} massage-area`}>
      <div className='user-dp'>
        <img src={user_dp} alt='' />
      </div>
      <div className='massage'>
        <div className='msg'>{msg}</div>
        <div className='time'>12:30pm</div>
      </div>
    </div>
  )
}

export default Msg
