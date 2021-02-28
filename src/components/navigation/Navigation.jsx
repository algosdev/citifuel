import React from 'react'
import cls from './navigation.module.scss'
function Navigation({ sectionValue }) {
  return (
    <div className={cls.navigation}>
      <div className={cls.columns}>
        <div className={cls.col}></div>
        <div className={cls.col}></div>
        <div className={cls.col}></div>
        <div className={cls.col}></div>
      </div>
      <div className={cls.columns}>
        <div className={cls.count}>
          {sectionValue === '01' ? <span>01</span> : ''}
        </div>
        <div className={cls.count}>
          {sectionValue === '02' ? <span>02</span> : ''}
        </div>
        <div className={cls.count}>
          {sectionValue === '03' ? <span>03</span> : ''}
        </div>
        <div className={cls.count}>
          {sectionValue === '04' ? <span>04</span> : ''}
        </div>
      </div>
    </div>
  )
}

export default Navigation
