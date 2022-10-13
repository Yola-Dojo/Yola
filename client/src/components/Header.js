import React from 'react'

const Header = (props) => {

  const {heading} = props

  return (
    <header>
      <h1>{heading}</h1>
    </header>
  )
}

export default Header