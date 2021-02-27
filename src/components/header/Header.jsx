import React from 'react'
import cls from './header.module.scss'
import logo from '../../images/logo.png'
function Header() {
  return (
    <div className={cls.container}>
      <div className='wrapper'>
        <div className={cls.inner}>
          <div className={cls.logo}>
            <img src={logo} alt='Logo' />
          </div>
          <ul className={cls.nav_list}>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
