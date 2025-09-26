import React from 'react';
import ButtonStyle2 from '../Button/ButtonStyle2';

export default function HeroStyle2({
  title,
  subTitle,
  btnText,
  btnUrl,
  bgImgUrl,
}) {
  return (
    <div className="cs_hero cs_style_7 cs_primary_bg cs_center text-center position-relative">
      <div
        className="cs_hero_bg cs_bg_filed h-100 w-100 position-absolute top-0 start-0"
        style={{
          backgroundImage: `url(${bgImgUrl})`,
        }}
      />
      <div className="container position-relative cs_zindex_3">
        <div className="cs_hero_text">
          {subTitle && (
            <p className="cs_hero_subtitle cs_white_color text-uppercase d-inline-flex position-relative cs_mb_25 cs_letter_spacing_1 cs_medium">
              <span dangerouslySetInnerHTML={{ __html: subTitle }} />
            </p>
          )}
          {title && (
            <h1
              className="cs_hero_title cs_fs_89 cs_white_color cs_mb_44"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}

          <div className="cs_hero_btn">
            <ButtonStyle2
              btnUrl={btnUrl}
              btnText={btnText}
              icon
              variant="cs_white_btn cs_radius_20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
