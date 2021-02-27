import React from 'react'
import cls from './reviews.module.scss'
function ReviewItem({ data }) {
  return (
    <div className={cls.item}>
      <div className={cls.img_cont}>
        <img src={data.img} alt='Customer' />
      </div>
      <div className={cls.content}>
        <div className={cls.title}>{data.fullname}</div>
        <div className={cls.desc}>{data.description}</div>
      </div>
    </div>
  )
}

export default ReviewItem
