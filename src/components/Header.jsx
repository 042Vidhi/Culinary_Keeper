import React from 'react'
import culinary_logo from '../images/culinary_logo.png'
function Header() {
  return (
    <div className='pt-12 pl-12'>
    <img src={culinary_logo} alt="logo" className='h-12' />
    </div>
  )
}

export default Header