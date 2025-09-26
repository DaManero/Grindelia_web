import React from 'react';
import Slider from 'react-slick';
import RoomCardStyle4 from '../RoomCard/RoomCardStyle4';

export default function RoomsSliderStyle5({ data }) {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
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
    <div className="cs_slider cs_style_1 cs_slider_gap_40 cs_hover_show_arrows">
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div className="cs_slide" key={index}>
            <RoomCardStyle4 {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
