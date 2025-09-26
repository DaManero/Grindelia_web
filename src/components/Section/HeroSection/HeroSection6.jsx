import React from 'react';
import AvailabilityForm from '../../Forms/AvailabilityForm';

export default function HeroSection6({ data = {} }) {
  const { title, bgImgUrl, downSectionId } = data;
  return (
    <section className="cs_hero cs_style_6 cs_primary_bg cs_center text-center position-relative">
      <div
        className="cs_hero_bg cs_bg_filed cs_bg_fixed h-100 w-100 position-absolute top-0 start-0"
        style={{ backgroundImage: `url(${bgImgUrl})` }}
      />
      <div className="container position-relative cs_zindex_3">
        <div className="cs_hero_text">
          {title && (
            <h1
              className="cs_hero_title cs_fs_89 cs_white_color cs_mb_80 cs_mb_lg_40"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          <AvailabilityForm variant="cs_accent_bg cs_type_3" />
        </div>
      </div>
      <a href={`${downSectionId}`} className="cs_down_btn_2" />
    </section>
  );
}
