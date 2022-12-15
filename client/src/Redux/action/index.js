export const CurrentUserData = (event) => {
    return {
        type: 'CURRENT_USER_HANDLE',
        payload: event,
    }
}
export const userData = (event) => {
    return {
        type: 'USER_HANDLE',
        payload: event,
    }
}
export const startSocket = (event) => {
    return {
        type: "SOCKET",
        payload: event
    }
}
export const userMassge = (event) => {
    return {
        type: "USERMSG",
        payload: event
    }
}