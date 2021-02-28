import React from 'react'
import Slider from 'react-slick'
function ReviewSlider({ children }) {
  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default ReviewSlider
