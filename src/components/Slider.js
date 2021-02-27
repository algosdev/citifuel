import React from 'react'
import Slider from 'react-slick'
function ReviewSlider({ children }) {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default ReviewSlider
