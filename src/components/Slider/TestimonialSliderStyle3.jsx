import React, { useRef } from 'react';
import Slider from 'react-slick';
import Spacing from '../Spacing';
import TestimonialCard3 from '../TestimonialCard/TestimonialCardStyle3';

export default function TestimonialSliderStyle3({
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
    <>
      <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_hover_show_arrows">
        <div className="container">
          <div className="cs_section_heading_wrap_1">
            <div className="cs_section_heading cs_style_1">
              <p
                className="cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_28 cs_mb_lg_15 text-uppercase"
                dangerouslySetInnerHTML={{ __html: sectionSubTitle }}
              />
              <h2
                className="cs_fs_67 mb-0"
                dangerouslySetInnerHTML={{ __html: sectionTitle }}
              />
            </div>
            <div className="cs_section_heading_icon cs_accent_color">
              <svg
                width={187}
                height={187}
                viewBox="0 0 187 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                opacity="0.2"
              >
                <path
                  d="M114.467 85C115.6 85 115.6 85 116.733 85C137.133 85 157.533 85 176.8 85C177.933 85 179.067 85 180.2 85C184.733 86.1333 187 89.5333 185.867 94.0667C185.867 98.6 182.467 102 177.933 102C176.8 102 175.667 102 175.667 102C155.267 102 136 102 115.6 102C114.467 102 114.467 102 113.333 102C114.467 103.133 114.467 103.133 115.6 104.267C130.333 119 145.067 133.733 158.667 147.333C162.067 150.733 163.2 156.4 159.8 159.8C156.4 163.2 151.867 163.2 147.333 159.8C143.933 156.4 139.4 151.867 136 148.467C124.667 137.133 114.467 126.933 103.133 115.6C103.133 115.6 102 114.467 100.867 114.467C100.867 115.6 100.867 116.733 100.867 116.733C100.867 137.133 100.867 157.533 100.867 176.8C100.867 177.933 100.867 179.067 100.867 180.2C99.7333 184.733 96.3333 187 91.8 185.867C87.2667 185.867 83.8667 182.467 83.8667 177.933C83.8667 176.8 83.8667 175.667 83.8667 174.533C83.8667 154.133 83.8667 134.867 83.8667 114.467C83.8667 113.333 83.8667 113.333 83.8667 112.2C83.8667 112.2 82.7333 112.2 82.7333 111.067C82.7333 112.2 82.7333 112.2 81.6 113.333C66.8667 128.067 52.1333 142.8 38.5333 156.4C35.1333 159.8 31.7333 159.8 28.3333 158.667C23.8 158.667 22.6667 151.867 27.2 148.467C32.8667 141.667 39.6667 136 45.3333 130.333C54.4 121.267 62.3333 113.333 71.4 104.267C71.4 104.267 72.5333 103.133 73.6667 103.133C73.6667 103.133 73.6667 103.133 73.6667 102C71.4 102 71.4 102 70.2667 102C49.8667 102 30.6 102 10.2 102C9.06667 102 7.93333 102 6.8 102C2.26667 100.867 0 97.4667 0 92.9333C0 88.4 3.4 85 7.93333 85C9.06667 85 10.2 85 10.2 85C30.6 85 49.8667 85 70.2667 85C71.4 85 71.4 85 73.6667 85C72.5333 83.8667 71.4 83.8667 71.4 82.7333C56.6667 69.1333 41.9333 54.4 27.2 39.6667C23.8 36.2667 22.6667 30.6 27.2 27.2C30.6 23.8 35.1333 23.8 39.6667 27.2C45.3333 32.8667 51 39.6667 57.8 45.3333C66.8667 54.4 74.8 62.3333 83.8667 71.4C83.8667 71.4 85 72.5333 85 73.6667C85 73.6667 86.1333 73.6667 86.1333 72.5333C86.1333 71.4 86.1333 71.4 86.1333 70.2667C86.1333 49.8667 86.1333 29.4667 86.1333 10.2C86.1333 9.06667 86.1333 7.93333 86.1333 6.8C86.1333 2.26667 89.5333 0 94.0667 0C98.6 0 102 3.4 102 7.93333C102 9.06667 102 10.2 102 11.3333C102 31.7333 102 51 102 71.4C102 72.5333 102 72.5333 102 73.6667C103.133 72.5333 103.133 72.5333 104.267 71.4C119 56.6667 132.6 41.9333 147.333 27.2C151.867 22.6667 156.4 22.6667 159.8 27.2C163.2 30.6 163.2 35.1333 159.8 38.5333C159.8 39.6667 158.667 39.6667 158.667 40.8C143.933 55.5333 130.333 69.1333 115.6 83.8667C115.6 83.8667 114.467 83.8667 114.467 85Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="cs_slider_arrows cs_style_4 cs_mobile_hide">
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
          <Slider ref={sliderRef} {...settings}>
            {data?.map((item, index) => (
              <div className="cs_slide" key={index}>
                <TestimonialCard3 {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
