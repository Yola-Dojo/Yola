import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../components/CartIcon.svg'
import Register from './Register'

const LinksOptions = () => {

  const openDialog = () => {document.getElementById('regDialog').showModal()}

  return (
    <>
      <ul className='inline stageRight'>
        <li><Link to='/login' className='noWrap'>Sign in</Link></li>
        <li><button className='link' onClick={openDialog}>Register</button></li>
        <li><Link to='/'><img src={CartIcon} className='cartIcon' alt='Your Shopping Cart' /></Link></li>
      </ul>
      <Register/>
    </>
  )
}

export default LinksOptions