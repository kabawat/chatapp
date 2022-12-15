import user1 from '../../Assets/user-dp/user1.png'

const inimsg = [
    {
        id: '',
        name: '',
        dp: user1,
        room: '',
        massage: [
            {
                msg: 'hy',
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                auth: true,
            }
        ]
    },
]
export const user_smg = (state = inimsg, action) => {
    if (action.type === 'USERMSG') {
        console.log(action.payload);
    }
}
export default SocketData