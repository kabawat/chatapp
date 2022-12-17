import React from 'react'
import user from '../../Assets/user-dp/user2.jpeg'
const UserAction = () => {
  return (
    <div className='UserAction'>
      <div className='user_Info'>
        <div className="user-dp">
          <img src={user} alt="" />
        </div>
      </div>
      <div className='userAct'>2</div>
    </div>
  )
}

export default UserAction
