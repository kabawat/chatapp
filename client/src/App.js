import React, { createContext, useEffect } from 'react'
import ChatApp from './ChatApp'
import UserAuthentication from './UserAuth'
import { io } from 'socket.io-client'
import axios from 'axios'
const URL = `http://localhost:2917/`
const socket = io(URL)
// socket.on('connect', () => {
//   console.log(socket.id);
// })
const createConnection = (socketAction) => {
    socket.on('connect', () => {
        console.log(socket.id);
        socketAction()
    })
}
// my app 

export const ContextAPI = createContext()
const App = () => {
    useEffect(() => {
        const verify = async () => {
            const result = await axios.get('http://localhost:2917/privat-router')
            console.log(await result);
        }
        verify()
    })
    const parser = { createConnection, socket }
    return (
        <>
            <ContextAPI.Provider value={parser}>
                {/* <ChatApp /> */}
                < UserAuthentication />
            </ContextAPI.Provider>
        </>
    )
}
export default App
