import React from 'react';
import AvailabilityForm from '../../Forms/AvailabilityForm';

export default function HeroSection8({ data }) {
  const { title, bgImgUrl } = data;
  return (
    <div className="container-fluid cs_plr_100">
      <div className="cs_hero cs_style_8 cs_center text-center position-relative">
        <div
          className="cs_hero_bg cs_bg_filed cs_bg_fixed h-100 w-100 position-absolute top-0 start-0 cs_radius_5 cs_primary_bg"
          style={{ backgroundImage: `url(${bgImgUrl})` }}
        />
        <div className="container position-relative cs_zindex_3">
          <div className="cs_hero_text">
            <h1
              className="cs_hero_title cs_fs_89 cs_white_color cs_mb_75 cs_mb_lg_50"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <AvailabilityForm variant="cs_type_5 cs_white_bg cs_radius_5" />
          </div>
        </div>
      </div>
    </div>
  );
}
