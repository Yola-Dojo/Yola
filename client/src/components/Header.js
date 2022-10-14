import React from 'react'
import LinksNav from './LinksNav'
import LinksOptions from './LinksOptions'

const Header = (props) => {

  const {heading} = props

  return (
    <header>
      <nav>
        <LinksNav />
      </nav>
      <h1>{heading}</h1>
      <LinksOptions />
    </header>
  )
}

export default Header