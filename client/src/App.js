import React, { createContext } from 'react'
import ChatApp from './ChatApp'
import UserAuthentication from './UserAuth'
import { io } from 'socket.io-client'
const URL = `http://localhost:5500/`
// const socket = io(URL)
// // socket.on('connect', () => {
// //   console.log(socket.id);
// // })
// const createConnection = (socketAction) => {
//     socket.on('connect', () => {
//         console.log(socket.id);
//         socketAction()
//     })
// }
 // my app 
export const ContextAPI = createContext()
const App = () => {
    // const parser = { createConnection, socket }
    return (
        <>
            {/* // <ContextAPI.Provider value={parser}> */}
            {/* <ChatApp /> */}
            < UserAuthentication />
            {/* // </ContextAPI.Provider> */}
        </>
    )
}
export default App
