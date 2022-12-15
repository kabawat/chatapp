import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import User from './User'
import { CurrentUserData } from '../../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { GrAdd } from 'react-icons/gr'
import userDp from '../../Assets/user-dp/user1.png'
import { ContextAPI } from '../../App'
import { userData } from '../../Redux/action'
const ChatAction = () => {
  const context = useContext(ContextAPI);
  console.log(context);
  const { list } = useSelector(state => state.userHander)
  const Dispatch = useDispatch()
  const [Active, SetActive] = useState(0)
  const userActive = (curVal, index) => {
    Dispatch(CurrentUserData(curVal))
    SetActive(index)
  }

  const [activeClass, SetactiveClass] = useState(false)
  const addUser = () => {
    SetactiveClass(true)
  }
  // newUserData
  const [newUserData, SetNewUserData] = useState({
    username: '',
    room: ''
  })

  const handChange = (event) => {
    const { name, value } = event.target
    SetNewUserData({
      ...newUserData,
      [name]: value
    })
  }
  const [olduser, Setolduser] = useState([])
  useEffect(() => {
    Setolduser(JSON.parse(localStorage.getItem('userChat')))
  }, [])
  const getNewUser = () => {
    const { createConnection, socket } = context
    const newChatInfo = {
      name: newUserData.username,
      roomId: newUserData.room,
      img: userDp
    }

    if (olduser) {
      localStorage.setItem('userChat', JSON.stringify([...olduser, newChatInfo]))
      function newChat() {
        const data = [...olduser, newUserData]
        socket.emit('newUser', data)
        Setolduser([...olduser, newChatInfo])
        Dispatch(userData([...olduser, newChatInfo]))
      }
      createConnection(newChat())
    } else {
      localStorage.setItem('userChat', JSON.stringify([newChatInfo]))
      const newChat = () => {
        const data = [newUserData]
        socket.emit('newUser', [data])
        Setolduser([newChatInfo])
        Dispatch(userData([newChatInfo]))
      }
      createConnection(newChat())
    }
    SetactiveClass(false)
    SetNewUserData({
      username: '',
      room: ''
    })
  }

  return (
    <div className='ChatAction'>
      <form className='char-search'>
        <input type='search' className='searchInput' placeholder='search...' />
      </form>
      <div className='user-list-container'>
        <div className='list-nav'>
          <div className="add-user">
            <div className="icon" onClick={() => addUser(true)}><GrAdd /></div>
          </div>
        </div>
        <ul className='user-list'>
          {/* {
            console.log(list)
          } */}
          {
            list ? list.map((curVal, index) => {
              const val = { Active, ...curVal, index }
              return <li onClick={() => userActive(curVal, index)} key={index}>
                <User  {...val} />
              </li>
            }) : ''
          }
        </ul>
      </div>
      {
        activeClass ? <div className={'add-user-modale'} id='add_modal'>
          <div className="add-user-container">
            <div className="user-controller">
              <div className="field-tital">Username</div>
              <input type="text" className="user-controll" name='username' value={newUserData.username} onChange={handChange} placeholder='Name' />
            </div>
            <div className="user-controller">
              <div className="field-tital">Room ID</div>
              <input type="text" className="user-controll" name='room' value={newUserData.room} onChange={handChange} placeholder='Room ID' />
            </div>
            <div className="user-controller">
              <button className='btn btn-success' onClick={getNewUser}>Save</button>
            </div>
          </div>
        </div> : ''
      }
    </div >
  )
}

export default ChatAction
