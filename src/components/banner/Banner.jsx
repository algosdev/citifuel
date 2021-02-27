import React from 'react'
import cls from './banner.module.scss'
import banner1 from '../../images/banner1.png'
import { DotBackground } from '../dotted_bg'
function Banner() {
  return (
    <div className={cls.container}>
      <div className='wrapper'>
        <div className={cls.inner}>
          <div className={cls.left}>
            <DotBackground />
            <div className='big_title'>Full solution services in logistics</div>
            <div className='leading'>
              Help trucking companies efficiently transport loads safely,
              securely and on-time
            </div>
          </div>
          <div className={cls.right}>
            <div className={cls.img_cont}>
              <img src={banner1} alt='Banner image' />
              <div className={cls.top_element}></div>
              <div className={cls.bottom_element}></div>
            </div>
            <div className={cls.navigation}>
              <div className={cls.columns}>
                <div className={cls.col}></div>
                <div className={cls.col}></div>
                <div className={cls.col}></div>
                <div className={cls.col}></div>
              </div>
              <div className={cls.count}>01</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
