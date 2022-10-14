import React from 'react'
import OptionsAdmin from './OptionsAdmin'

const HeaderAdmin = (props) => {

  const {user} = props

  return (
    <header>
      <h1>Yola</h1>
      <h1>Welcome, {user}</h1>
      <OptionsAdmin />
    </header>
  )
}

export default HeaderAdmin