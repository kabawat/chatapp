import React from 'react'
import Login from './Login'
import SignUp from './signup/SignUp'
import { StyledEngineProvider } from '@mui/material/styles';
const UserAuthentication = () => {
    return (
        <StyledEngineProvider injectFirst>
            {/* <Login /> */}
            <SignUp />
        </StyledEngineProvider>
    )
}

export default UserAuthentication