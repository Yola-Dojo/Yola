import React, {useState} from 'react'
import axios from 'axios'

const Register = () => {

    const [confirmReg, setConfirmReg] = useState("")
    const [errors, setErrors] = useState({})

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const register = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:8000/api/users/register",
        user,
        {
            withCredentials: true
        })
        .then((res)=>{
            console.log(res.data)
            setUser({
                firstName:"",
                lastName:"",
                username:"",
                email:"",
                password:"",
                confirmPassword:""
            })
            setConfirmReg("Thank you for registering! Now you can login..")
            setErrors({})
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
  return (
    <div>
      {confirmReg ? <h4 style={{color: 'green'}}>{confirmReg}</h4> : null}
      <form onSubmit={register}>
        {errors.firstName ? (<span className='error-text'>{errors.firstName.message}</span>) : null}
        <input
        placeholder='First name'
        type='text'
        name='firstName'
        value = {user.firstName}
        onChange={(e)=> handleChange(e)}
        />

        {errors.lastName ? (<span className='error-text'>{errors.lastName.message}</span>) : null}
        <input
        placeholder='Last Name'
        type='text'
        name='lastName'
        value={user.lastName}
        onChange={(e)=> handleChange(e)}
        />

        {errors.email ? (<span className='error-text'>{errors.email.message}</span>) : null}
        <input
        placeholder='Email Address'
        type='email'
        name='email'
        value={user.email}
        onChange={(e)=> handleChange(e)}
        />

        {errors.password ? (<span className='error-text'>{errors.password.message}</span>) : null}
        <input
        placeholder='Password'
        type='password'
        name='password'
        value={user.password}
        onChange={(e)=> handleChange(e)}
        />

        {errors.confirmPassword ? (<span className='error-text'>{errors.confirmPassword.message}</span>) : null}
        <input
        placeholder='Confirm Password'
        type='password'
        name='confirmPassword'
        value={user.confirmPassword}
        onChange={(e)=> handleChange(e)}
        />

        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Register