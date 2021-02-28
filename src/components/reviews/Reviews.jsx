import React, { useEffect } from 'react'
import cls from './reviews.module.scss'
import ReviewSlider from './ReviewSlider'
import ReviewItem from './ReviewItem'
import customer2 from '../../images/customer2.jpg'
import customer3 from '../../images/customer3.jpg'
import customer4 from '../../images/customer4.jpg'
import customer5 from '../../images/customer5.jpg'
import { DottedBackgroundSmall } from '../DottedBackgroundSmall'
import { useInView } from 'react-intersection-observer'
function Reviews({ setSectionValue }) {
  const data = [
    {
      img: customer2,
      fullname: 'Kate Frank',
      description:
        'The pink-necked green pigeon (Treron vernans) is a species of bird in the dove family, Columbidae, common in Southeast Asia.',
    },
    {
      img: customer3,
      fullname: 'Kate Frank',
      description:
        'The pink-necked green pigeon (Treron vernans) is a species of bird in the dove family, Columbidae, common in Southeast Asia.',
    },
    {
      img: customer4,
      fullname: 'Kate Frank',
      description:
        'The pink-necked green pigeon (Treron vernans) is a species of bird in the dove family, Columbidae, common in Southeast Asia.',
    },
    {
      img: customer5,
      fullname: 'Kate Frank',
      description:
        'The pink-necked green pigeon (Treron vernans) is a species of bird in the dove family, Columbidae, common in Southeast Asia.',
    },
  ]

  const { ref, inView } = useInView({
    threshold: 0.4,
  })
  useEffect(() => {
    if (inView) {
      setSectionValue('04')
    }
  }, [inView, setSectionValue])
  return (
    <div className={cls.container} id='services'>
      <DottedBackgroundSmall />
      <div className='wrapper small'>
        <div className={cls.inner}>
          <div className={cls.header}>
            <p className='title'>Customer Reviews</p>
          </div>
          <div className={cls.slider} ref={ref}>
            <ReviewSlider>
              {data.map((item, index) => (
                <ReviewItem key={index} data={item} />
              ))}
              {data.map((item, index) => (
                <ReviewItem key={index} data={item} />
              ))}
            </ReviewSlider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
