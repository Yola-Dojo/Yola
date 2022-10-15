import React from 'react'
import LinksNav from './LinksNav'
import LinksOptions from './LinksOptions'

const Header = (props) => {

  const {heading} = props

  return (
    <header>
      <nav>
        <LinksNav />garbage 2
      </nav>
      <h1>{heading}</h1>
      <LinksOptions />
    </header>
    garbage 2b
  )
}

export default Header