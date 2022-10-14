import React from 'react'
import InlineUL from './InlineUL'
import {Link} from 'react-router-dom'

const OptionsAdmin = (props) => {

  //this list to be set by conditional after reading current URL path to hide any <li>s that don't need to be shown
  const linkList = [
    <li key='1'><Link to='/admin/create'>Create Product</Link></li>,
    <li key='2'><Link to='/login'>Logout</Link></li>,
    <li key='3'><Link to='/admin'>Home</Link></li>
  ]

  return (
    <InlineUL linkList={linkList}/>
  )
}

export default OptionsAdmin