import React from 'react'
import cls from './header.module.scss'
import logo from '../../images/logo.png'
function Header() {
  return (
    <>
      <div className={cls.container}>
        <div className='wrapper'>
          <div className={cls.inner}>
            <div className={cls.logo}>
              <img src={logo} alt='Logo' />
            </div>
            <ul className={cls.nav_list}>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About us</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#contacts'>Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cls.margin}></div>
    </>
  )
}

export default Header
