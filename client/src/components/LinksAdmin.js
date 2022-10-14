import React from 'react'
import {Link} from 'react-router-dom'

const LinksAdmin = () => {
  return (
    <ul className='inline'>
      <li><Link to='/admin/create'>Create Product</Link></li>
      <li><Link to='/login'>Logout</Link></li>
      <li><Link to='/admin'>Home</Link></li>
    </ul>
  )
}

export default LinksAdmin