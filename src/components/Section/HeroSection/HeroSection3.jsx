import React from 'react';
import AvailabilityForm from '../../Forms/AvailabilityForm';
import HeroSliderStyle2 from '../../Slider/HeroSliderStyle2';

export default function HeroSection3({ data }) {
  const { title, subTitle, bgImgUrls } = data;
  return (
    <section className="cs_hero cs_style_3 cs_primary_bg cs_center position-relative">
      <div className="container">
        <div className="cs_hero_text text-center">
          {title && (
            <h1
              className="cs_hero_title cs_fs_89 cs_white_color cs_mb_32"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}

          {subTitle && (
            <p
              className="cs_hero_subtitle cs_white_color"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
          )}
        </div>
        <AvailabilityForm variant="cs_type_1" />
      </div>
      <HeroSliderStyle2 data={bgImgUrls} />
    </section>
  );
}
