import React, { useEffect } from 'react'
import cls from './banner.module.scss'
import banner1 from '../../images/banner1.png'
import { DottedBackgroundSmall } from '../DottedBackgroundSmall'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function Banner({ setSectionValue }) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  })
  useEffect(() => {
    if (inView) {
      setSectionValue('01')
    }
  }, [inView, setSectionValue])

  return (
    <div ref={ref} className={cls.container} id='home'>
      <div className='wrapper'>
        <div className={cls.inner}>
          <div className={cls.left}>
            <DottedBackgroundSmall />
            <div className='big_title'>Full solution services in logistics</div>
            <div className='leading'>
              Help trucking companies efficiently transport loads safely,
              securely and on-time
            </div>
          </div>
          <div className={cls.right}>
            <div className={cls.img_cont}>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{
                  type: 'tween',
                  duration: 0.3,
                  ease: 'linear',
                  delay: 0.7,
                }}
                className={cls.img}
              >
                <img src={banner1} alt='Banner' />
              </motion.div>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{
                  type: 'tween',
                  ease: 'linear',
                  duration: 0.3,
                  delay: 0.5,
                }}
                className={cls.top_element}
              />
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{
                  type: 'tween',
                  ease: 'linear',
                  duration: 0.3,
                  delay: 1.1,
                }}
                className={cls.bottom_element}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
