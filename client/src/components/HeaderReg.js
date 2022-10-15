import React from 'react'
import {Link} from 'react-router-dom'
import LinksNav from './LinksNav'
import Logo from './Logo'

const Header = (props) => {

  const {heading} = props

  return (
    <header>
    <h1><Link to='/' className='plain'><Logo /></Link></h1>
      <nav>
        <LinksNav />
      </nav>
    </header>
  )
}

export default Header