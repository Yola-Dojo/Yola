import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const LinksNav = () => {

  const location = useLocation()
  const path = location.pathname

  return (
    <ul className='inline'>
      <li>{ path !== '/locations' ? <Link to='/locations' className='noWrap'>Store Locator</Link> : <span className='disabled'>Store Locator</span> } </li>
      <li>{ path !== '/products' ? <Link to='/products'>Shop</Link> : <span className='disabled'>Shop</span> } </li>
      <li>{ path !== '/about' ? <Link to='/about'>About</Link> : <span className='disabled'>About</span> } </li>
      <li>{ path !== '/contact' ? <Link to='/contact' className='noWrap'>Contact Us</Link> : <span className='disabled'>Contact Us</span> } </li>
      <li>{ path !== '/admin' ? <Link to='/admin' className='noWrap'>Dev Admin</Link> : <span className='disabled'>Dev Admin</span> } </li>
    </ul>
  )
}

export default LinksNav