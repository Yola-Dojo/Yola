import React from 'react'
import InlineUL from './InlineUL'
import {Link} from 'react-router-dom'
import CartIcon from './CartIcon.svg'

const OptionsUser = (props) => {

  //this list to be set by conditional after reading current URL path to hide any <li>s that don't need to be shown
  const linkList = [
    <li><Link to='/login'>Sign in</Link></li>,
    <li><Link to='/register/consumer'>Register</Link></li>,
    <li><Link to='/'><img src={CartIcon} className='cartIcon' /></Link></li>
  ]

  return (
    <InlineUL linkList={linkList}/>
  )
}

export default OptionsUser