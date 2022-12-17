import React, { useState } from 'react'
import './style.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import axios from 'axios'
const SignUp = () => {
    // login form  handal 
    const [loginData, SetLoginData] = useState({
        username: '',
        password: ''
    })


    const loginHandaler = (event) => {
        const { name, value } = event.target
        SetLoginData({
            ...loginData,
            [name]: value
        })
    }

    const [loginCls, SetLoginCls] = useState({
        user: 'f_row',
        pwd: 'f_row'
    })

    // Login Username Handale 
    const UserNameHandalBlur = (event) => {
        if (event.target.value !== '') {
            SetLoginCls({
                ...loginCls,
                user: 'f_row last focus'
            })
        } else {
            SetLoginCls({
                ...loginCls,
                user: 'f_row last'
            })
        }
    }

    const UserNameHandalFocus = () => {
        SetLoginCls({
            ...loginCls,
            user: 'f_row last focus'
        })
    }

    // login password handale 
    const loginPwdHandalBlur = (event) => {
        if (event.target.value !== '') {
            SetLoginCls({
                ...loginCls,
                pwd: 'f_row last focus'
            })
        } else {
            SetLoginCls({
                ...loginCls,
                pwd: 'f_row last'
            })
        }
    }

    const loginPwdHandalFocus = () => {
        SetLoginCls({
            ...loginCls,
            pwd: 'f_row last focus'
        })
    }

    // login submit handal 
    const [loginValid, SetLoginValid] = useState(false)
    const loginHandal = async (event) => {
        const { username, password } = loginData
        event.preventDefault()
        if (username !== '' && password !== '') {
            await axios({
                url: 'http://localhost:2917/login',
                method: 'post',
                data: loginData,
                headers: {},
                withCredentials: {},
                credentials: 'same-origin'
            }).then((result) => {
                console.log(result);
                SetLoginValid(true)
                setTimeout(() => {
                }, 1000)

            })
        } else {
            if (password == '' && username == '') {
                {
                    SetLoginCls({
                        user: 'f_row last shake',
                        pwd: 'f_row last shake'
                    })
                    setTimeout(() => {
                        SetLoginCls({
                            user: 'f_row last',
                            pwd: 'f_row last'
                        })
                    }, 300);

                }
            } else if (password == '') {
                SetLoginCls({
                    ...loginCls,
                    pwd: 'f_row last shake'
                })
                setTimeout(() => {
                    SetLoginCls({
                        ...loginCls,
                        pwd: 'f_row last'
                    })
                }, 300);
            } else if (username == '') {
                SetLoginCls({
                    ...loginCls,
                    user: 'f_row last shake'
                })
                setTimeout(() => {
                    SetLoginCls({
                        ...loginCls,
                        user: 'f_row last'
                    })
                }, 300);
            }
        }
    }

    // forget Password
    const [mainClass, SetMainClass] = useState('formBox level-login')
    const [Forgot, SetForgot] = useState(false)
    const pwdForgot = (value) => {
        SetForgot(value)
        if (value) {
            SetMainClass('formBox level-login level-forget')
        } else {
            SetMainClass('formBox level-login')
        }
    }

    const [ForgotCls, SetForgotCls] = useState('f_row last')
    const ResetBlurHandle = (event) => {
        if (!event.target.value) {
            SetForgotCls('f_row last')
        }
    }

    const ResetFocusHandle = (event) => {
        SetForgotCls('f_row last focus')
    }

    // Forgot change handaler 
    const [forgotEmail, SetForgotEmail] = useState('')
    const ForgotHandalChange = (event) => {
        SetForgotEmail(event.target.value);
    }

    // forgot submit handal 
    const [ForgotDone, SetForgotDone] = useState(false)
    const ForgotHandal = (event) => {
        event.preventDefault()
        if (!forgotEmail) {
            SetForgotCls('f_row last shake')
            setTimeout(() => {
                SetForgotCls('f_row last')
            }, 300)
        } else {
            SetForgotDone(true)
        }
    }

    // register form 
    const [regForm, SetRegForm] = useState(false)
    const regTag = (value) => {
        SetRegForm(value)
        if (value) {
            if (Forgot) {
                SetMainClass('formBox level-forget level-reg')
            } else {
                SetMainClass('formBox level-login level-reg')
            }
        } else {
            if (Forgot) {
                SetMainClass('formBox level-login level-reg-revers level-forget')
            } else {
                SetMainClass('formBox level-login level-reg-revers')
            }
        }
    }

    // register form controll 
    const [regHandal, setRegHandal] = useState({
        user: '',
        email: '',
        pwd: ''
    })
    const HandalRegChange = (event) => {
        const { name, value } = event.target
        setRegHandal({
            ...regHandal,
            [name]: value
        })
    }
    const [RegCls, SetRegCls] = useState({
        user: '',
        email: '',
        pwd: ''
    })

    const RegHandleBlur = (event) => {
        const { name, value } = event.target
        if (value) {
            SetRegCls({
                ...RegCls,
                [name]: 'focus'
            })
        } else {
            SetRegCls({
                ...RegCls,
                [name]: ''
            })
        }
    }
    const RegHandleFocus = (event) => {
        const { name, value } = event.target
        SetRegCls({
            ...RegCls,
            [name]: 'focus'
        })
    }

    const [RegBtn, setRegBtn] = useState(false)
    const RegHandleSubmit = async (event) => {
        event.preventDefault()
        if (regHandal.user && regHandal.email && regHandal.pwd) {
            await axios.post('http://localhost:2917/signup', regHandal).then((result) => {
                console.log(result);
            })
            setRegBtn(true)

        } else {
            if (!regHandal.user && !regHandal.email && !regHandal.pwd) {
                SetRegCls({
                    user: 'shake',
                    email: 'shake',
                    pwd: 'shake'
                })
                setTimeout(() => {
                    SetRegCls({
                        user: '',
                        email: '',
                        pwd: ''
                    })
                }, 300)
            } else if (!regHandal.user && !regHandal.email) {
                SetRegCls({
                    ...RegCls,
                    user: 'shake',
                    email: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        user: '',
                        email: '',
                    })
                }, 300)
            } else if (!regHandal.email && !regHandal.pwd) {
                SetRegCls({
                    ...RegCls,
                    pwd: 'shake',
                    email: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        pwd: '',
                        email: '',
                    })
                }, 300)
            } else if (!regHandal.user && !regHandal.pwd) {
                SetRegCls({
                    ...RegCls,
                    user: 'shake',
                    pwd: 'shake'
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        user: '',
                        pwd: ''
                    })
                }, 300)
            } else if (!regHandal.user) {
                SetRegCls({
                    ...RegCls,
                    user: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        user: '',
                    })
                }, 300)
            } else if (!regHandal.pwd) {
                SetRegCls({
                    ...RegCls,
                    pwd: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        pwd: '',
                    })
                }, 300)
            } else if (!regHandal.email) {
                SetRegCls({
                    ...RegCls,
                    email: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        email: '',
                    })
                }, 300)
            }
        }
    }

    return (
        <div className='container'>
            <div className="user_Auth">
                <div className={mainClass} >
                    <div className="box boxShaddow"></div>
                    <div className="box loginBox">
                        <h2>LOGIN</h2>
                        <form className="form" onSubmit={loginHandal}>
                            <div className={loginCls.user}>
                                <label>Username</label>
                                <input type="text"
                                    className="input-field"
                                    name='username'
                                    value={loginData.username}
                                    onChange={loginHandaler}
                                    onBlur={UserNameHandalBlur}
                                    onFocus={UserNameHandalFocus} />
                                <u></u>
                            </div>
                            <div className={loginCls.pwd}>
                                <label>Password</label>
                                <input type="password"
                                    className="input-field"
                                    name='password'
                                    value={loginData.password}
                                    onChange={loginHandaler}
                                    onBlur={loginPwdHandalBlur}
                                    onFocus={loginPwdHandalFocus} />
                                <u></u>
                            </div>
                            <button className={loginValid ? "chat_btn active" : "chat_btn"}><span>GO</span><u></u>
                                <FileDownloadDoneIcon />
                            </button>
                            <div className="f_link">
                                <button className="resetTag" type='button' onClick={() => pwdForgot(true)}>Forgot your password?</button>
                            </div>
                        </form>
                    </div>
                    <div className="box forgetbox">
                        <button className="back icon-back" onClick={() => pwdForgot(false)}>
                            <ArrowBackIcon />
                        </button>
                        <h2>Reset Password</h2>
                        <form className="form" onSubmit={ForgotHandal}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            <div className={ForgotCls}>
                                <label>Email Id</label>
                                <input type="text"
                                    className="input-field"
                                    value={forgotEmail}
                                    onChange={ForgotHandalChange}
                                    onBlur={ResetBlurHandle}
                                    onFocus={ResetFocusHandle}
                                />
                                <u></u>
                            </div>
                            <button className={ForgotDone ? "chat_btn active" : "chat_btn"}><span>Reset</span><u></u>
                                <FileDownloadDoneIcon />
                            </button>
                        </form>
                    </div>
                    <div className="box registerBox">
                        <span className="reg_bg"></span>
                        <h2>Register</h2>
                        <form className="form" onSubmit={RegHandleSubmit}>
                            <div className={`${RegCls.user} f_row`}>
                                <label>Username</label>
                                <input type="text"
                                    className="input-field"
                                    name='user'
                                    value={regHandal.user}
                                    onChange={HandalRegChange}
                                    onFocus={RegHandleFocus}
                                    onBlur={RegHandleBlur} />
                                <u></u>
                            </div>
                            <div className={`${RegCls.email} f_row`}>
                                <label>Email</label>
                                <input type="email"
                                    className="input-field"
                                    name='email'
                                    value={regHandal.email}
                                    onChange={HandalRegChange}
                                    onFocus={RegHandleFocus}
                                    onBlur={RegHandleBlur} />
                                <u></u>
                            </div>
                            <div className={`${RegCls.pwd} f_row last`}>
                                <label>Password</label>
                                <input type="password"
                                    className="input-field"
                                    name='pwd'
                                    value={regHandal.pwd}
                                    onChange={HandalRegChange}
                                    onFocus={RegHandleFocus}
                                    onBlur={RegHandleBlur} />
                                <u></u>
                            </div>
                            <button className={RegBtn ? "chat_btn-large active" : "chat_btn-large"}>NEXT</button>
                        </form>
                    </div>
                    <button href="#" className="regTag icon-add" onClick={() => regTag(!regForm)}>
                        <AddIcon />
                    </button>
                </div>
            </div >
        </div>
    )
}

export default SignUp