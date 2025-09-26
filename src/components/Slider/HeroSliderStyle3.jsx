import React, { useRef } from 'react';
import Slider from 'react-slick';
import HeroStyle2 from '../Hero/HeroStyle2';

export default function HeroSliderStyle3({ data }) {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: false,
  };
  return (
    <>
      <div className="position-relative">
        <Slider ref={sliderRef} {...settings} className="cs_slider cs_style_1">
          {data?.map((item, index) => (
            <div className="cs_slide" key={index}>
              <HeroStyle2 {...item} />
            </div>
          ))}
        </Slider>
        <div className="cs_slider_arrows cs_style_3 cs_secondary_color cs_mobile_hide_md">
          <div className="cs_left_arrow" onClick={previous}>
            <svg
              width={30}
              height={60}
              viewBox="0 0 30 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2285 -7.62939e-06L30 1.77148L2.87146 28.9C2.63342 29.1381 2.50564 29.4513 2.50564 29.787C2.50564 30.1228 2.63593 30.436 2.87146 30.674L30 57.8025L28.2285 59.574L1.09998 32.4455C0.390881 31.7364 0 30.7918 0 29.787C0 28.7823 0.390881 27.8401 1.09998 27.1285L28.2285 -7.62939e-06Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="cs_right_arrow" onClick={next}>
            <svg
              width={30}
              height={60}
              viewBox="0 0 30 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.77149 59.8764L0 58.113L27.1285 31.1081C27.3666 30.8712 27.4944 30.5594 27.4944 30.2252C27.4944 29.891 27.3641 29.5792 27.1285 29.3422L0 2.33744L1.77149 0.574036L28.9 27.5788C29.6091 28.2847 30 29.225 30 30.2252C30 31.2254 29.6091 32.1632 28.9 32.8716L1.77149 59.8764Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
