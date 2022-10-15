import React from 'react'
import LinksNav from './LinksNav'
import LinksOptions from './LinksOptions'
import Logo from './Logo'

const Header = (props) => {

  const {heading} = props

  return (
    <header>
      <nav>
        <LinksNav />
      </nav>
      <h1><Logo /></h1>
      <LinksOptions />
    </header>
  )
}

export default Header