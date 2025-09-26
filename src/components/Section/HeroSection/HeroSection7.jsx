import React from 'react';
import AvailabilityForm from '../../Forms/AvailabilityForm';
import HeroSliderStyle3 from '../../Slider/HeroSliderStyle3';

export default function HeroSection7({ data }) {
  return (
    <section className="cs_hero_7_wrap position-relative cs_primary_bg">
      <HeroSliderStyle3 data={data} />
      <div className="cs_hero_7_form">
        <div className="container">
          <AvailabilityForm variant="cs_type_4" />
        </div>
      </div>
    </section>
  );
}
