import React, { useRef } from 'react';
import Slider from 'react-slick';
import PostCardStyle2 from '../PostCard/PostCardStyle2';
import PostCardStyle3 from '../PostCard/PostCardStyle3';

export default function BlogSliderStyle4({ data }) {
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
    <div className="cs_slider cs_style_1 cs_slider_gap_60 cs_hover_show_arrows">
      <div className="container">
        <Slider ref={sliderRef} {...settings}>
          {data?.map((item, index) => (
            <div className="cs_slide" key={index}>
              <PostCardStyle3 variant="cs_size_1" {...item} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="cs_slider_arrows cs_style_2 cs_mobile_hide">
        <div className="cs_left_arrow slick-arrow" onClick={previous}>
          <svg
            width={56}
            height={16}
            viewBox="0 0 56 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM56 7L1 7V9L56 9V7Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="cs_right_arrow slick-arrow" onClick={next}>
          <svg
            width={56}
            height={16}
            viewBox="0 0 56 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.7071 8.70711C56.0976 8.31659 56.0976 7.68342 55.7071 7.2929L49.3431 0.928937C48.9526 0.538412 48.3195 0.538412 47.9289 0.928936C47.5384 1.31946 47.5384 1.95263 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM-8.74228e-08 9L55 9L55 7L8.74228e-08 7L-8.74228e-08 9Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
