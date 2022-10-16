import React, {useState} from 'react'
import axios from 'axios'
import Register from './Register'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate()

    const {user, setUser} = props

    const openDialog = () => {document.getElementById('regDialog').showModal()}

    const login = (event)=>{
        event.preventDefault()
        axios.post("http://localhost:8000/api/users/login",
        {
            email: email,
            password: password
        },
        {
            withCredentials: true
        })
        .then((res)=>{
            const userName = res.data.firstName
            setUser(userName)
            console.log(res, "res")
            console.log(res.data, "is res data!")
            navigate('/products')
        })
        .catch((err)=>{
            console.log(err.response.data)
            setErrorMessage(err.response.data.message)
        })
    }

//waiting to agree on CSS styling ..
  return (
    <>
    <div className='login-form'>
        <div>
            <h2>Login to Your Account</h2>
            <p className='error-text'>{errorMessage ? errorMessage:""}</p>
            <form onSubmit={login}>
                <div> 
                    <input
                    placeholder='Email Address'
                    type="text"
                    name='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>Sign in</button>
                </div>
            </form>
        </div>

        <div>
            <h2>New Here?</h2>
            <p>Sign up to get started</p>
            <button type='submit' onClick={openDialog}>Sign Up</button>
        </div>
    </div>
    <Register />
    </>
  )
}

export default Login