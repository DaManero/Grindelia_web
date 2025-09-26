import React, { useState } from 'react';
import Slider from 'react-slick';
import TestimonialCardStyle2 from '../TestimonialCard/TestimonialCardStyle2';

export default function TestimonialSliderStyle2({ data }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    dotsClass: 'cs_pagination cs_style_1 cs_mobile_show',
    afterChange: (current, next) => setCurrentSlide(current + 1),
  };
  return (
    <div>
      <div className="row align-items-center">
        <div className="col-lg-5 cs_mobile_hide">
          <div className="cs_slider_number cs_style_2 cs_primary_font cs_primary_color">
            <span className="cs_current_number">{currentSlide}</span>{' '}
            <span className="cs_slider_number_seperator" />{' '}
            <span className="cs_total_numbers">{data?.length}</span>
          </div>
        </div>
        <div className="col-lg-7">
          <Slider {...settings} className="position-relative cs_zindex_3">
            {data?.map((item, index) => (
              <div className="cs_slide" key={index}>
                <TestimonialCardStyle2 {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
