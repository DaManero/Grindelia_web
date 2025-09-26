import React from 'react';
import TestimonialSliderStyle4 from '../../Slider/TestimonialSliderStyle4';

export default function TestimonialSection5({
  sectionTitle,
  sectionSubTitle,
  lightColor,
  data,
}) {
  return (
    <>
      <div className="cs_half_bg_right cs_primary_bg" />
      <TestimonialSliderStyle4
        sectionTitle={sectionTitle}
        sectionSubTitle={sectionSubTitle}
        lightColor={lightColor}
        data={data}
      />
    </>
  );
}
