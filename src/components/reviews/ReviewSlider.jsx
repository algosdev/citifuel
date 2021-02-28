import React from 'react'
import Slider from 'react-slick'
function ReviewSlider({ children }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false,
        },
      },
    ],
  }
  return <Slider {...settings}>{children}</Slider>
}

export default ReviewSlider
