import React from 'react'
import cls from './about.module.scss'
import about_image from '../../images/about_us.png'
import { DotBackground } from '../dotted_bg'
function About() {
  return (
    <div className={cls.container}>
      <div className='wrapper'>
        <div className={cls.inner}>
          <div className={cls.left}>
            <DotBackground />
            <p className={`${cls.title} title`}>About us</p>
            <p className='leading'>
              Citifuel LLC is a full solution services provider focused on being
              a leader in safety and technology. Our mission is to help trucking
              companies efficiently transport loads safely, securely and
              on-time. From our high-tech tracking and technology systems to our
              friendly drivers and customer service staff, everything is focused
              on ways to come up with solutions to our customers’ problems and
              to make it as easy as possible to do business with us. We succeed
              because of our culture of doing what we say, and saying what we
              do. We bring this time honored way of life into the modern era by
              melding it with advanced technology, experienced employees, and a
              passion to do it right. This culture of success through honest,
              hard work is driven into each of our companies through the
              personal passion and example of our executive team.
            </p>
          </div>
          <div className={cls.right}>
            <div className={cls.img_cont}>
              <img src={about_image} alt='About us image' />
              <div className={cls.left_element}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
