import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const LinksAdmin = (props) => {

  const {user, setUser} = props
  const navigate = useNavigate()

  const handleLogout = (e)=>{
    axios.post("http://localhost:8000/api/users/logout",
    {}, 
    {withCredentials:true})
    .then((res)=>{
        console.log(res)
        console.log(res.data)
        navigate("/")
    })
    .catch((err)=>{
        console.log(err)
    })
  }


  return (
    <ul className='inline stageRight'>
      <li><Link to='/admin/create' className='noWrap'>Create Product</Link></li>
      <li><button className='link' onClick={handleLogout}>Logout</button></li>
      <li><Link to='/admin'>Home</Link></li>
    </ul>
  )
}

export default LinksAdmin