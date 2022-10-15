import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../components/CartIcon.svg'
import Register from './Register'

const LinksOptions = () => {

  const openDialog = () => {document.getElementById('regDialog').showModal()}
  const closeDialog = () => {document.getElementById('regDialog').close()}

  return (
    <>
      <ul className='inline stageRight'>
        <li><Link to='/login' className='noWrap'>Sign in</Link></li>
        <li><button className='link' onClick={openDialog}>Register</button></li>
        <li><Link to='/'><img src={CartIcon} className='cartIcon' /></Link></li>
      </ul>
      <dialog id='regDialog'>
        <button className='closer' onClick={closeDialog}>X</button>
        <Register/>
      </dialog>
    </>
  )
}

export default LinksOptions