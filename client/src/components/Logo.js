import React from 'react'
import YolaLogo from './Logo.png'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <img src={YolaLogo} className='logo' alt='Yola creamy whipped yogurt topping' />
    </Link>
  )
}

export default Logo