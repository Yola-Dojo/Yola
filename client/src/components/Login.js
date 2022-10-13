import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    
    const navigate = useNavigate()

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
            console.log(res, "res")
            console.log(res.data, "is res data!")
            // navigate("") waiting for location to navigate to
        })
        .catch((err)=>{
            console.log(err.response.data)
            setErrorMessage(err.response.data.message)
        })
    }

//waiting to agree on CSS styling ..
  return (
    <div>
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
                <button>Sign in</button>
            </div>

        </form>
    </div>
  )
}

export default Login