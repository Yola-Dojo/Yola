import React from 'react'
import LinksAdmin from './LinksAdmin'

const HeaderAdmin = (props) => {

  const {user} = props

  return (
    <header>
      <h1>Yola</h1>
      <h1>Welcome, {user}</h1>
      <LinksAdmin />
    </header>
  )
}

export default HeaderAdmin