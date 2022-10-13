import React from 'react'
import InlineUL from './InlineUL'
import {Link} from 'react-router-dom'

const Nav = (props) => {

  //this list to be set by conditional after reading current URL path to hide any <li>s that don't need to be shown
  const linkList = [
    <li><Link to='/locations'>Store Locator</Link></li>,
    <li><Link to='/products'>Shop</Link></li>,
    <li><Link to='/about'>About</Link></li>,
    <li><Link to='/contact'>Contact Us</Link></li>
  ]

  return (
    <nav>
      <InlineUL linkList={linkList}/>
    </nav>
  )
}

export default Nav