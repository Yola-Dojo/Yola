import React from 'react'
import {Link} from 'react-router-dom'
import LinksAdmin from './LinksAdmin'
import Logo from './Logo'

const HeaderAdmin = (props) => {

  const {user} = props

  return (
    <header>
      <h1>
        <Link to='/'>
          <Logo />
        </Link>
      </h1>
      <span className='welcome'>Welcome, {user}</span>
      <LinksAdmin />
    </header>
  )
}

export default HeaderAdmin