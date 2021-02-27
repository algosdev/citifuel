import React from 'react'
import { Rectangle } from '../svg'
import cls from './map.module.scss'
import map_image from '../../images/map.png'
import { DottedBackgroundSmall } from '../DottedBackgroundSmall'
function Map() {
  return (
    <div className={cls.container}>
      <div className='wrapper'>
        <div className={cls.inner}>
          <div className={cls.left}>
            <DottedBackgroundSmall />
            <div className={`${cls.title}`}>
              <div className='title bg'>48 states</div>
              <div>
                <span className='title bg'>365</span>
                <Rectangle />
                <span className='title bg'>24</span>
                <Rectangle />
                <span className='title bg'>7</span>
              </div>
            </div>
          </div>
          <div className={cls.right}>
            <div className={cls.img_cont}>
              <img src={map_image} alt='Map' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
