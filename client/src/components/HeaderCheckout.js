import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'

const HeaderCheckout = (props) => {

  const {heading, user} = props

  return (
    <header>
      <Link to='/products'>Continue Shopping</Link>
      <h1><Logo /></h1>
      {user !== '' ? <span className='welcome'>Welcome, {user}</span> : null }
    </header>
  )
}

export default HeaderCheckout