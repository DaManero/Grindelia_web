import React from 'react';
import TestimonialSliderStyle3 from '../../Slider/TestimonialSliderStyle3';

export default function TestimonialSection4({
  sectionTitle,
  sectionSubTitle,
  data,
}) {
  return (
    <>
      <div className="cs_shape_1 cs_ternary_color">
        <svg
          width={1920}
          height={384}
          viewBox="0 0 1920 384"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M0 383C90.6874 266.048 351.673 65.6815 670.116 199.836C988.56 333.99 1184.62 249.079 1242.85 189.854C1367.34 67.7444 1677.25 -118.98 1921 110.998"
            stroke="currentColor"
            strokeWidth={3}
          />
        </svg>
      </div>
      <TestimonialSliderStyle3
        sectionTitle={sectionTitle}
        sectionSubTitle={sectionSubTitle}
        data={data}
      />
    </>
  );
}
