import React, { useEffect, useState } from 'react'
import user_01 from '../Assets/user-dp/user2.jpeg'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'
import { FiSend } from 'react-icons/fi'
import { GrAdd } from 'react-icons/gr'
import { BiImageAdd } from 'react-icons/bi'
import { FiFileText } from 'react-icons/fi'
import { RiContactsLine } from 'react-icons/ri'
import { GrMapLocation } from 'react-icons/gr'
import { HiOutlineMusicalNote } from 'react-icons/hi2'
import { AiOutlineCamera } from 'react-icons/ai'
import './style.css'
import Msg from './Msg'
import { useSelector } from 'react-redux'

const IsChat = ({ curUser }) => {
  const [state, setState] = useState()
  const handleChange = event => {
    setState(event.target.value)
  }
  const [fileDoc, SetFileDoc] = useState(false)
  return (
    <>
      <div className='header'>
        <div className='header-container'>
          <div className='user'>
            <div className='userDp'>
              <img src={curUser.img} alt='' />
            </div>
            <div className='userInfo'>
              <div className='user-name'>{curUser.name}</div>
              <div className='last-seen'>last seen: today 10:29pm</div>
            </div>
          </div>
          <div className='user-action'>
            <button className='user-action-btn'>
              <IoEllipsisHorizontalSharp />
            </button>
          </div>
        </div>
      </div>
      <div className='chat-area-box'>
        <div className='chat-area-inner'>
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />
          <Msg clas={''} user_dp={curUser.img} msg={'hello'} />
          <Msg clas={'my-msg'} user_dp={user_01} msg={'hello'} />

        </div>
      </div>
      <div className='chat-box-section'>
        <div className='chat-box'>
          <form>
            <div
              className={fileDoc ? 'file-contaienr active' : 'file-contaienr'}
            >
              <div className='file-share'>
                <div className='file-content'>
                  <label htmlFor='image' className='file-icon'>
                    <BiImageAdd />
                  </label>
                  <input
                    type='file'
                    className='file'
                    name='image'
                    id='image'
                  />
                  <div className='file-title'>Image</div>
                </div>
                <div className='file-content'>
                  <label htmlFor='pdf' className='file-icon'>
                    <FiFileText />
                    <input type='file' name='pdf' id='pdf' className='file' />
                  </label>
                  <div className='file-title'>PDF</div>
                </div>
                <div className='file-content'>
                  <label htmlFor='contect' className='file-icon'>
                    <RiContactsLine />
                    <input
                      type='file'
                      name='contect'
                      id='contect'
                      className='file'
                    />
                  </label>
                  <div className='file-title'>contect</div>
                </div>
                <div className='file-content'>
                  <label htmlFor='location' className='file-icon'>
                    <GrMapLocation />
                    <input
                      type='file'
                      name='location'
                      id='location'
                      className='file'
                    />
                  </label>
                  <div className='file-title'>Location</div>
                </div>
                <div className='file-content'>
                  <label htmlFor='music' className='file-icon'>
                    <HiOutlineMusicalNote />
                    <input
                      type='file'
                      name='music'
                      id='music'
                      className='file'
                    />
                  </label>
                  <div className='file-title'>Music</div>
                </div>
                <div className='file-content'>
                  <label htmlFor='camera' className='file-icon'>
                    <AiOutlineCamera />
                    <input
                      type='file'
                      name='camera'
                      id='camera'
                      className='file'
                    />
                  </label>
                  <div className='file-title'>Camera</div>
                </div>
              </div>
            </div>
            <GrAdd
              className={fileDoc ? 'icon1 active' : 'icon1'}
              onClick={() => SetFileDoc(!fileDoc)}
            />
            <input
              onChange={handleChange}
              value={state}
              type='text'
              placeholder='Massage'
              className='msg-box'
            />
            <FiSend className='icon2' />
          </form>
        </div>
      </div>
    </>
  )
}

const ChatArea = () => {
  const { userHander } = useSelector(state => state)
  const { curUser } = userHander;
  return (
    <div className='ChatArea'>
      {
        curUser ? <IsChat curUser={curUser} /> : 'no chat'
      }
    </div>
  )
}

export default ChatArea
