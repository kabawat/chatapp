import React, { useEffect } from 'react'
import ChatArea from './ChatArea'
import UserArea from './UsersArea'
import './style.css'
import axios from 'axios'
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
