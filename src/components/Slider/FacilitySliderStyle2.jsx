import React from 'react';
import Slider from 'react-slick';
import FacilityCardStyle4 from '../FacilityCard/FacilityCardStyle4';

export default function FacilitySliderStyle2({ data }) {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    dotsClass: 'cs_pagination cs_style_1 cs_type_2',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_hover_show_arrows">
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div className="cs_slide" key={index}>
            <FacilityCardStyle4 {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
