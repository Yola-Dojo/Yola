import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../components/CartIcon.svg'
import Register from './Register'

const LinksOptions = (props) => {

  const {user} = props

  const openDialog = () => {document.getElementById('regDialog').showModal()}

  return (
    <>
      <ul className='inline stageRight'>
        { user === '' ? <li><Link to='/login' className='noWrap'>Sign in</Link></li> : null }
        { user === '' ? <li><button className='link' onClick={openDialog}>Register</button></li> : null }
        <li><Link to='/checkout'><img src={CartIcon} className='cartIcon' alt='Your Shopping Cart' /></Link></li>
      </ul>
      <Register/>
    </>
  )
}

export default LinksOptions