import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'

const HeaderCheckout = (props) => {

  const {heading, user} = props

  return (
    <header>
      <Link to='/'>Continue Shopping</Link>
      <h1><Logo /></h1>
      <span>Welcome, {user}</span>
    </header>
  )
}

export default HeaderCheckout