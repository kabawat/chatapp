import { list } from "../Data/List";
const data = JSON.parse(localStorage.getItem('userChat'))

const initialstate = {
    list: !(data === null) ? data : '',
    curUser: !(data === null) ? data[0] : ''
}
export const userHander = (state = initialstate, action) => {
    if (action.type === 'USER_HANDLE') {
        console.log(action.payload);
        return {
            ...state,
            list: [...action.payload]
        }
    }
    if (action.type === 'CURRENT_USER_HANDLE') {
        return {
            ...state,
            curUser: { ...action.payload }
        }
    }
    return state
}