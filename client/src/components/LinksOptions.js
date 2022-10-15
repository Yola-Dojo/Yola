import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../components/CartIcon.svg'

const LinksOptions = () => {
  return (
    <ul className='inline stageRight'>
      <li><Link to='/login' className='noWrap'>Sign in</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/'><img src={CartIcon} className='cartIcon' /></Link></li>
    </ul>
  )
}

export default LinksOptions