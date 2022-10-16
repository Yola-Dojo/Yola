import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const LinksNav = () => {

  const location = useLocation()
  const path = location.pathname

  return (
    <ul className='inline'>
      { path !== '/locations' ? <li><Link to='/locations' className='noWrap'>Store Locator</Link></li> : null }
      { path !== '/products' ? <li><Link to='/products'>Shop</Link></li> : null }
      { path !== '/about' ? <li><Link to='/about'>About</Link></li> : null }
      { path !== '/contact' ? <li><Link to='/contact' className='noWrap'>Contact Us</Link></li> : null }
      { path !== '/admin' ? <li><Link to='/admin' className='noWrap'>Dev Admin</Link></li> : null }
    </ul>
  )
}

export default LinksNav