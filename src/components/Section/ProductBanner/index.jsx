import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';

export default function ProductBanner({
  title,
  currency,
  price,
  pricePer,
  data,
}) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="position-relative cs_gallery_hover_show_nav">
      <div className="cs_gallery_slider_thumb_2 slick-slider slick-initialized">
        <Slider
          speed={1200}
          asNavFor={nav2}
          ref={slider => (sliderRef1 = slider)}
        >
          {data?.map((item, index) => (
            <div key={index}>
              <div
                className="cs_gallery_slider_thumb_item_2 cs_bg_filed"
                style={{
                  backgroundImage: `url(${item.imgUrlLg})`,
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="cs_gallery_slider_nav_2_wrap">
        <div className="container position-relative cs_gallery_slider_nav_2_in">
          <div>
            <h1 className="cs_white_color mb-0 cs_fs_67">{title}</h1>
            <p className="cs_price mb-0 cs_white_color cs_fs_38">
              <span className="cs_primary_font">
                {currency}
                {price}
              </span>
              <span className="cs_price_per cs_fs_16">{pricePer}</span>
            </p>
          </div>
          <Slider
            asNavFor={nav1}
            ref={slider => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            centerMode={true}
            focusOnSelect={true}
            centerPadding={0}
            arrows={false}
            className="cs_gallery_slider_nav_2"
          >
            {data?.map((item, index) => (
              <div key={index}>
                <div
                  className="cs_gallery_slider_thumb_mini_2 cs_bg_filed"
                  style={{
                    backgroundImage: `url(${item.imgUrlSm})`,
                    width: '100%',
                    display: 'inline-block',
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* <div className="cs_left_arrow_gallery_2 cs_center cs_mobile_hide slick-arrow">
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
      <div className="cs_right_arrow_gallery_2 cs_center cs_mobile_hide slick-arrow">
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
      </div> */}
    </div>
  );
}
