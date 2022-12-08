import React from 'react'
import Slider from 'react-slick'

export default function AchievementsSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


  return (
    <div>
      <Slider {...settings}>
        <div className='text-white'>
          <iframe width="100%" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
        <div className='text-white'>
          <iframe width="100%" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
      </Slider>
    </div>
  )
}

