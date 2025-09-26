import React, { useState, useEffect } from 'react';

export default function GallerySliderStyle2({ data }) {
  const [slides, setSlides] = useState(data);

  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = slides.length;

  const updateSlides = direction => {
    let nextIndex;
    if (direction === 'next') {
      nextIndex = activeIndex === totalSlides - 1 ? 0 : activeIndex + 1;
    } else {
      nextIndex = activeIndex === 0 ? totalSlides - 1 : activeIndex - 1;
    }

    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const prev1Index = activeIndex === 0 ? totalSlides - 1 : activeIndex - 1;
    const prev2Index = prev1Index === 0 ? totalSlides - 1 : prev1Index - 1;
    const next1Index = activeIndex === totalSlides - 1 ? 0 : activeIndex + 1;
    const next2Index = next1Index === totalSlides - 1 ? 0 : next1Index + 1;

    const updatedSlides = slides.map((slide, index) => {
      let className = '';
      if (index === activeIndex) {
        className = 'active';
      } else if (index === prev1Index) {
        className = 'prev-1';
      } else if (index === prev2Index) {
        className = 'prev-2';
      } else if (index === next1Index) {
        className = 'next-1';
      } else if (index === next2Index) {
        className = 'next-2';
      }
      return { src: slide, className };
    });

    setSlides(updatedSlides);
  }, [activeIndex, totalSlides]);

  return (
    <div className="cs_custom_slide_container">
      <div className="container">
        <div className="cs_custom_slide_wrapper cs_lightgallery">
          {slides.map((slide, index) => (
            <div key={index} className={`cs_custom_slide ${slide.className}`}>
              <div
                className="cs_custom_slide_item cs_bg_filed cs_lightbox_item cs_custom_pointer_wrap"
                style={{ backgroundImage: `url(${slide})` }}
              >
                <img src={slide} alt="" className="d-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_custom_slide_arrows">
        <span
          className="cs_custom_slide_arrow_left"
          onClick={() => updateSlides('prev')}
        >
          <svg
            width={56}
            height={16}
            viewBox="0 0 56 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM56 7L1 7V9L56 9V7Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span
          className="cs_custom_slide_arrow_right"
          onClick={() => updateSlides('next')}
        >
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
        </span>
      </div>
    </div>
  );
}
