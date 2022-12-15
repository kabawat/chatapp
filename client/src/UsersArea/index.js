import React from 'react'
import ChatAction from './chat-action'
import './style.css'
import UserAction from './user-action'

const UserArea = () => {
  return (
    <div className='UserArea'>
      <div className='aside-container'>
        <UserAction />
        <ChatAction />
      </div>
    </div>
  )
}

export default UserArea
