import React from 'react'
import LinksAdmin from './LinksAdmin'
import Logo from './Logo'

const HeaderAdmin = (props) => {

  const {user, setUser} = props

  return (
    <header>
      <h1><Logo /></h1>
      <span className='welcome'>Welcome, {user}</span>
      <LinksAdmin user={user} setUser={setUser} />
    </header>
  )
}

export default HeaderAdmin