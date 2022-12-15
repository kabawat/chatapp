import React from 'react'
import ChatArea from './ChatArea'
import UserArea from './UsersArea'
import './style.css'
const ChatApp = () => {
  return (
    <div className='container'>
      <div className='chatApp'>
        <ChatArea />
        <UserArea />
      </div>
    </div>
  )
}
export default ChatApp
