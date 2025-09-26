import React, { useRef } from 'react';
import Slider from 'react-slick';
import RoomCardStyle2 from '../RoomCard/RoomCardStyle2';

export default function RoomsSliderStyle3({ data }) {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    dotsClass: 'cs_pagination cs_style_1 cs_mobile_show',
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
      <Slider ref={sliderRef} {...settings}>
        {data?.map((item, index) => (
          <div className="cs_slide" key={index}>
            <RoomCardStyle2 {...item} />
          </div>
        ))}
      </Slider>
      <div className="cs_slider_arrows cs_style_1 cs_mobile_hide">
        <div
          className="cs_left_arrow cs_center cs_primary_color slick-arrow"
          onClick={previous}
        >
          <svg
            width={22}
            height={16}
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM22 7L1 7V9L22 9V7Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          className="cs_right_arrow cs_center cs_primary_color slick-arrow"
          onClick={next}
        >
          <svg
            width={22}
            height={16}
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0L0 9Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
