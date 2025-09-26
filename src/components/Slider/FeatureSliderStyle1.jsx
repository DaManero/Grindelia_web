import React, { useRef } from 'react';
import SectionHeading from '../SectionHeading';
import Slider from 'react-slick';
import IconBoxCardStyle2 from '../IconBoxCard/IconBoxCardStyle3';
import Spacing from '../Spacing';

export default function FeatureSliderStyle1({
  sectionTitle,
  sectionSubTitle,
  data,
}) {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    swipeToSlide: true,
    dots: false,
  };
  return (
    <div className="cs_slider cs_style_1 cs_slider_gap_30 cs_show_shadow_20">
      <div className="container">
        <div className="cs_section_heading_wrap_1">
          <SectionHeading
            sectionTitle={sectionTitle}
            sectionSubTitle={sectionSubTitle}
            bottomSpaceLg="0"
            bottomSpaceMd="0"
          />
          <div className="cs_slider_arrows cs_style_4">
            <div
              className="cs_left_arrow slick-arrow cs_center"
              onClick={previous}
            >
              <svg
                width={21}
                height={16}
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM21 7L1 7V9L21 9V7Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div
              className="cs_right_arrow slick-arrow cs_center"
              onClick={next}
            >
              <svg
                width={21}
                height={16}
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <Spacing lg="80" md="50" />
        <div className="cs_full_width_right">
          <Slider ref={sliderRef} {...settings}>
            {data?.map((item, index) => (
              <div className="cs_slide" key={index}>
                <IconBoxCardStyle2 {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
