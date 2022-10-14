import React from 'react'
import InlineUL from './InlineUL'
import {Link} from 'react-router-dom'

const Nav = (props) => {

  //this list to be set by conditional after reading current URL path to hide any <li>s that don't need to be shown
  const linkList = [
    <li key='1'><Link to='/locations'>Store Locator</Link></li>,
    <li key='2'><Link to='/products'>Shop</Link></li>,
    <li key='3'><Link to='/about'>About</Link></li>,
    <li key='4'><Link to='/contact'>Contact Us</Link></li>
  ]

  return (
    <nav>
      <InlineUL linkList={linkList}/>
    </nav>
  )
}

export default Nav