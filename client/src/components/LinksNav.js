import React from 'react'
import {Link} from 'react-router-dom'

const LinksNav = () => {
  return (
    <ul className='inline'>
      <li><Link to='/locations'>Store Locator</Link></li>
      <li><Link to='/products'>Shop</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>
    </ul>
  )
}

export default LinksNav