import React, { useRef } from 'react';
import Slider from 'react-slick';
import Spacing from '../Spacing';
import TestimonialCard3 from '../TestimonialCard/TestimonialCardStyle3';
import SectionHeading from '../SectionHeading';

export default function TestimonialSliderStyle4({
  sectionTitle,
  sectionSubTitle,
  lightColor,
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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    dotsClass: 'cs_pagination cs_style_1 cs_type_3',
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
    <div className="container-fluid p-0 position-relative">
      <div className="cs_slider cs_style_1 cs_slider_gap_24">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Spacing lg="36" md="0" />
              <SectionHeading
                sectionTitle={sectionTitle}
                sectionSubTitle={sectionSubTitle}
                bottomSpaceLg="0"
                bottomSpaceMd="50"
                lightColor={lightColor}
              />
            </div>
            <div className="col-lg-8">
              <Slider
                ref={sliderRef}
                {...settings}
                style={{ position: 'initial' }}
              >
                {data?.map((item, index) => (
                  <div className="cs_slide" key={index}>
                    <TestimonialCard3 {...item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* <div className="cs_pagination cs_style_1 cs_type_3">
          <ul className="slick-dots" role="tablist" style={{}}>
            <li className="slick-active" role="presentation">
              <button
                type="button"
                role="tab"
                id="slick-slide-control40"
                aria-controls="slick-slide40"
                aria-label="1 of 2"
                tabIndex={0}
                aria-selected="true"
              >
                1
              </button>
            </li>
            <li role="presentation">
              <button
                type="button"
                role="tab"
                id="slick-slide-control41"
                aria-controls="slick-slide41"
                aria-label="2 of 2"
                tabIndex={-1}
              >
                2
              </button>
            </li>
            <li role="presentation">
              <button
                type="button"
                role="tab"
                id="slick-slide-control42"
                aria-controls="slick-slide42"
                aria-label="3 of 2"
                tabIndex={-1}
              >
                3
              </button>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
