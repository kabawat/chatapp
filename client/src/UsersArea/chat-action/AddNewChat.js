import React, { useState } from 'react'
import axios from 'axios'
const AddNewChat = ({ SetactiveClass }) => {
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
    const getNewUser = async () => {
        const result = await axios({
            method: 'post',
            url: 'http://localhost:2917/new-user',
            data: { ...newUserData }
        })
        console.log(result);
        SetactiveClass(false)
    }
    return (
        <div className={'add-user-modale'} id='add_modal'>
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
                    <button className='btn-success' onClick={getNewUser}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewChat
