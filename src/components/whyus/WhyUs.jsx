import React from 'react'
import { Rectangle } from '../svg'
import cls from './whyus.module.scss'
import whyus_image from '../../images/why_us.png'
function WhyUs() {
  return (
    <div className={cls.container}>
      <div className='wrapper'>
        <div className={cls.inner}>
          <div className={cls.left}>
            <div className={cls.img_cont}>
              <img src={whyus_image} alt='Why us' />
            </div>
          </div>
          <div className={cls.right}>
            <p className='title'>WHY US?</p>
            <p className='leading'>
              We’ve built our company around a commitment to four core values
            </p>
            <div className={cls.features}>
              <span>safety</span>
              <Rectangle />
              <span>quality</span>
              <Rectangle />
              <span>integrity</span>
              <Rectangle />
              <span>respect</span>
            </div>
            <div className='leading'>
              We deliver the best solutions in supporting you with
              transportation and logistics, supply chain technology and friendly
              customer service so you transport your goods from origin to
              destination seamlessly and efficiently. Our safe and effective
              solutions are engineered to minimize your costs, risks and
              time-consuming activities. As we continually enhance our network,
              we strive to add value and functionality for our partners.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
