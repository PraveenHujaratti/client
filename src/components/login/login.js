import LoginImage from '../../assets/images/login.jpg'
import { useState } from 'react'
import { BASE_URL } from '../../helper/helper'
import axios from 'axios'



function Login(props) {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = () => {

        console.log('user', username, password);
        if (username == null & password == null) {
            console.log('username or password cannor be empty')
            return
        }
        let data = {
            username: username,
            password: password
        }

        axios.post(BASE_URL + 'login', data).then((response) => {
            if (response.data.status) {
                console.log(response.data);

            } else {
                console.log(response.data.error);

            }
        }).catch((e) => {
            console.log('Error', e);

        })

    }
    return (
        <div className='login-bg'>
            <div className="overlay-bg">
                <div className='login-wrap'>
                    <div className='login-image'>
                        <img src={LoginImage} alt='login' />
                    </div>
                    <div className='login-form-wrap'>
                        <button>Login</button>

                        <div className="login-form-container">
                            <div className='login-title'>
                                <h1>Welcome</h1>
                                <p>Please login to your account.</p>
                            </div>
                            <div className='login-form'>
                                <div className='input-wrap'>
                                    <label htmlFor='username'>Username or Email</label>
                                    <input id='username' type='text' onChange={(e) => setUsername(e.target.value)} />
                                </div>

                                <div className='input-wrap'>
                                    <label htmlFor='password'>Password</label>
                                    <input id='password' type='password' onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className='login-options'>
                                    <a href='#'>Forgot Password</a>
                                    <button className="btn-yellow" onClick={(e) => handleSubmit()}>Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login