import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const LinksAdmin = (props) => {

  const {user, setUser} = props
  const navigate = useNavigate()

  const handleLogout = () => {
    //do we need to destroy the auth cookie here? -Bryan
    setUser('')
    navigate('/login')
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