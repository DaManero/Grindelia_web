import React from 'react';
import Slider from 'react-slick';

export default function HeroSliderStyle2({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    fade: true,
  };
  return (
    <>
      <Slider {...settings} className="cs_slider cs_style_1">
        {data?.map((item, index) => (
          <div className="cs_slide" key={index}>
            <div
              className="cs_hero_bg cs_bg_filed h-100 w-100"
              style={{ backgroundImage: `url(${item})` }}
            />
          </div>
        ))}
      </Slider>
      {/* <div className="cs_slider cs_style_1">
        <div
          className="cs_slider_container"
          data-autoplay={3000}
          data-loop={1}
          data-speed={3000}
          data-center={0}
          data-variable-width={0}
          data-slides-per-view={1}
          data-fade-slide={1}
        >
          <div className="cs_slider_wrapper">
            <div className="cs_slide">
              <div
                className="cs_hero_bg cs_bg_filed h-100 w-100"
                style={{ backgroundImage: `url(assets/img/hero_bg_5.jpeg)` }}
              />
            </div>
            <div className="cs_slide">
              <div
                className="cs_hero_bg cs_bg_filed h-100 w-100"
                style={{ backgroundImage: `url(assets/img/hero_bg_6.jpeg)` }}
              />
            </div>
            <div className="cs_slide">
              <div
                className="cs_hero_bg cs_bg_filed h-100 w-100"
                data-src="assets/img/hero_bg_5.jpeg"
              />
            </div>
            <div className="cs_slide">
              <div
                className="cs_hero_bg cs_bg_filed h-100 w-100"
                data-src="assets/img/hero_bg_6.jpeg"
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
