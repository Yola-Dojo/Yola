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
      { path !== '/admin/create' ? <li><Link to='/admin/create' className='noWrap'>Create Product</Link></li> : null }
      { path !== '/admin' ? <li><Link to='/admin'>Home</Link></li> : null }
      { path !== '/inbox' ? <li><Link to='/inbox'>Inbox</Link></li> : null }
      <li><button className='link' onClick={handleLogout}>Logout</button></li>
    </ul>
  )
}

export default LinksAdmin