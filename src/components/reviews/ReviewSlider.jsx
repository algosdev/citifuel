import React from 'react'
import Slider from 'react-slick'
function ReviewSlider({ children }) {
  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default ReviewSlider
