import React from 'react'
import Nav from './Nav'
import OptionsUser from './OptionsUser'

const Header = (props) => {

  const {heading} = props

  return (
    <header>
      <Nav />
      <h1>{heading}</h1>
      <OptionsUser />
    </header>
  )
}

export default Header