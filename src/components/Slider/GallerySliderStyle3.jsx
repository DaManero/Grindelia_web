import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';

export default function GallerySliderStyle3({ data }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="container">
      <div className="row cs_row_gap_lg_10">
        <div className="col-3">
          <div className="overflow-hidden cs_radius_5">
            <Slider
              asNavFor={nav1}
              ref={slider => (sliderRef2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              vertical={true}
              centerMode={true}
              focusOnSelect={true}
              centerPadding={0}
              arrows={false}
              className="cs_gallery_slider_nav"
            >
              {data?.map((item, index) => (
                <div className="cs_gallery_slider_thumb_mini" key={index}>
                  <img src={item.imgUrlSm} alt="Thumb" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-9">
          <div className="position-relative overflow-hidden cs_radius_5 cs_gallery_hover_show_nav cs_primary_bg">
            <Slider
              fade={true}
              asNavFor={nav2}
              ref={slider => (sliderRef1 = slider)}
              className="cs_gallery_slider_thumb"
            >
              {data?.map((item, index) => (
                <div className="cs_gallery_slider_thumb_item" key={index}>
                  <img src={item.imgUrlLg} alt="Thumb" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
