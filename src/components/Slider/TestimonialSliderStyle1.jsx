import React, { useState } from 'react';
import Slider from 'react-slick';
import TestimonialCard from '../TestimonialCard';

export default function TestimonialSliderStyle1({ data }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    dotsClass: 'cs_pagination cs_style_1 cs_mobile_show',
    afterChange: (current, next) => setCurrentSlide(current + 1),
  };
  return (
    <div className="cs_slider cs_style_1">
      <div className="container">
        <div className="cs_testimonial_1_wrap">
          <Slider {...settings} className="position-relative cs_zindex_3">
            {data?.map((item, index) => (
              <div className="cs_slide" key={index}>
                <TestimonialCard {...item} />
              </div>
            ))}
          </Slider>
          <div className="cs_testimonial_quote cs_accent_color">
            <svg
              width={512}
              height={379}
              viewBox="0 0 512 379"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_76_354)">
                <path
                  d="M245.642 151.008C242.682 227.992 207.168 293.133 136.139 334.586C97.6648 358.273 59.1909 370.117 14.7978 376.039C8.87872 376.039 5.91918 373.078 2.95965 367.156C0.000108577 364.195 0.000108577 358.273 5.91918 355.312C14.7978 352.352 20.7169 346.43 29.5955 343.469C47.3527 331.625 65.1099 319.781 76.9481 302.016C85.8267 287.211 91.7458 272.406 85.8267 254.641C82.8672 239.836 76.9481 230.953 62.1504 227.992C41.4336 222.07 29.5955 210.227 17.7573 192.461C-5.91897 148.047 -8.87851 88.8281 26.6359 44.414C47.3527 20.7265 73.9885 5.92183 106.543 -4.75645e-05C165.734 -5.92192 213.087 26.6484 230.844 79.9453C239.723 100.672 245.642 124.359 245.642 151.008Z"
                  fill="currentColor"
                  fillOpacity="0.1"
                />
                <path
                  d="M512 151.008C509.041 227.992 473.526 293.133 402.497 337.547C364.023 361.234 325.549 373.078 281.156 379C275.237 379 272.278 376.039 269.318 370.117C266.359 364.195 266.359 358.273 272.278 355.312C284.116 349.391 292.994 343.469 304.833 337.547C322.59 325.703 340.347 310.898 349.226 290.172C358.104 272.406 358.104 257.602 349.226 242.797C346.266 236.875 340.347 230.953 331.468 227.992C310.752 225.031 295.954 210.227 284.116 189.5C260.439 145.086 257.48 88.8281 292.994 47.375C313.711 20.7265 340.347 5.92183 372.902 2.96089C432.093 -2.96099 479.445 29.6093 497.202 82.9062C506.081 100.672 509.041 124.359 512 151.008Z"
                  fill="currentColor"
                  fillOpacity="0.1"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_354">
                  <rect width={512} height={379} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="cs_slider_number cs_style_1 cs_fs_38 cs_primary_font cs_primary_color cs_mobile_hide">
        <span className="cs_current_number">{currentSlide}</span>{' '}
        <span className="cs_slider_number_seperator" />{' '}
        <span className="cs_total_numbers">{data?.length}</span>
      </div>
    </div>
  );
}
