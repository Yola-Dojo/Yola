import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../components/CartIcon.svg'

const LinksOptions = () => {
  return (
    <ul className='inline'>
      <li><Link to='/login'>Sign in</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/'><img src={CartIcon} className='cartIcon' /></Link></li>
    </ul>
  )
}

export default LinksOptions