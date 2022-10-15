import React from 'react'
import LinksNav from './LinksNav'
import Logo from './Logo'

const Header = (props) => {

  const {heading} = props

  return (
    <header>
    <h1><Logo /></h1>
      <nav>
        <LinksNav />
      </nav>
    </header>
  )
}

export default Header