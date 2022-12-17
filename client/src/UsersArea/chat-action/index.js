import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import User from './User'
import { CurrentUserData } from '../../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { GrAdd } from 'react-icons/gr'
import AddNewChat from './AddNewChat'
const ChatAction = () => {
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
        activeClass ? <AddNewChat SetactiveClass={SetactiveClass} /> : ''
      }
    </div >
  )
}

export default ChatAction
