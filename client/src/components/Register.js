import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Register = () => {

    const [confirmReg, setConfirmReg] = useState("")
    const [errors, setErrors] = useState({})

    const closeDialog = () => {document.getElementById('regDialog').close()}

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        companyName: "",
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
    <dialog id='regDialog'>
      <button className='closer' onClick={closeDialog}>X</button>
        <div className='reg-form'>
            <h2>Sign Up</h2>
            <p style={{fontStyle:'italic', fontSize:'12px'}}>Please fill in this form to create an account</p>
        {confirmReg ? <h4 style={{color: 'green'}}>{confirmReg}</h4> : null}
        <form onSubmit={register}>
            <p className="text-xs text-red-600">{errors.firstName ? (<span className='error-text'>{errors.firstName.message}</span>) : null}</p>
            <p className="text-xs text-red-600">{errors.lastName ? (<span className='error-text'>{errors.lastName.message}</span>) : null}</p>
            <p className="text-xs text-red-600">{errors.email ? (<span className='error-text'>{errors.email.message}</span>) : null}</p>
            <p className="text-xs text-red-600">{errors.password ? (<span className='error-text'>{errors.password.message}</span>) : null}</p>
            <p className="text-xs text-red-600">{errors.confirmPassword ? (<span className='error-text'>{errors.confirmPassword.message}</span>) : null}</p>
            <div className='reg-top'>
                <input
                placeholder='First name'
                type='text'
                name='firstName'
                value = {user.firstName}
                onChange={(e)=> handleChange(e)}
                />

                <input
                placeholder='Last Name'
                type='text'
                name='lastName'
                value={user.lastName}
                onChange={(e)=> handleChange(e)}
                />
            </div>

            <div className='reg-bottom'>
                <input
                placeholder='Company name (optional)'
                type='text'
                name='companyName'
                value={user.companyName}
                onChange={(e)=> handleChange(e)}
                />

                <input
                placeholder='Email Address'
                type='email'
                name='email'
                value={user.email}
                onChange={(e)=> handleChange(e)}
                />

                <input
                placeholder='Password'
                type='password'
                name='password'
                value={user.password}
                onChange={(e)=> handleChange(e)}
                />

                <input
                placeholder='Confirm Password'
                type='password'
                name='confirmPassword'
                value={user.confirmPassword}
                onChange={(e)=> handleChange(e)}
                />
            </div>

            <button type='submit'>Sign Up</button>
        </form>
        <p>Already have an account? <Link to = {'/login'} className="text-sky-500 underline">Login here.</Link></p>
        </div>
    </dialog>
  )
}

export default Register