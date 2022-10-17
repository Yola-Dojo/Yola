import React, { useState } from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'

const LinksAdmin = (props) => {

  const {user, setUser} = props
  const navigate = useNavigate()
  
  const location = useLocation()
  const path = location.pathname

  const handleLogout = (e)=>{
    axios.post("http://localhost:8000/api/users/logout",
    {}, 
    {withCredentials:true})
    .then((res)=>{
        console.log(res)
        console.log(res.data)
        setUser('')
        navigate("/")
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return (
    <ul className='inline stageRight'>
      <li>{ path !== '/admin/create' ? <Link to='/admin/create' className='noWrap'>Create Product</Link> : <span className='disabled'>Create Product</span> } </li>
      <li>{ path !== '/admin' ? <Link to='/admin'>Home</Link> : <span className='disabled'>Home</span> } </li>
      <li>{ path !== '/inbox' ? <Link to='/inbox'>Inbox</Link> : <span className='disabled'>Inbox</span> } </li>
      <li><button className='link' onClick={handleLogout}>Logout</button></li>
    </ul>
  )
}

export default LinksAdmin