import React from 'react'
import SignUp from './signup/SignUp'
import { StyledEngineProvider } from '@mui/material/styles';
const UserAuthentication = () => {
    return (
        <StyledEngineProvider injectFirst>
            <SignUp />
        </StyledEngineProvider>
    )
}

export default UserAuthentication