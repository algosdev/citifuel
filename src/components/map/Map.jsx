import React, { useEffect } from 'react'
import { Rectangle } from '../svg'
import cls from './map.module.scss'
import map_image from '../../images/map.png'
import { DottedBackgroundSmall } from '../DottedBackgroundSmall'
import { useInView } from 'react-intersection-observer'
function Map({ setSectionValue }) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  })
  useEffect(() => {
    if (inView) {
      setSectionValue('03')
    }
  }, [inView, setSectionValue])
  return (
    <div ref={ref} className={cls.container}>
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
              <button className='btn'>Contact us</button>
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
