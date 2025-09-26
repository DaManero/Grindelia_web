import React from 'react';
import AvailabilityForm from '../../Forms/AvailabilityForm';

export default function HeroSection2({ data }) {
  const { title, subTitle, bgImgUrl, bgImgUrl2 } = data;
  return (
    <section className="cs_hero cs_style_2 position-relative">
      <div
        className="cs_hero_left_img cs_bg_filed"
        style={{ backgroundImage: `url(${bgImgUrl})` }}
      />
      <div
        className="cs_hero_left_right cs_bg_filed"
        style={{ backgroundImage: `url(${bgImgUrl2})` }}
      />
      <div className="cs_hero_in">
        <div className="cs_hero_content cs_center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-lg-6">
                <div className="cs_hero_text">
                  {subTitle && (
                    <p
                      className="cs_hero_subtitle cs_mb_28 cs_primary_color"
                      dangerouslySetInnerHTML={{ __html: subTitle }}
                    />
                  )}
                  {title && (
                    <h1
                      className="cs_hero_title mb-0 cs_fs_89"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_hero_form">
          <div className="container">
            <AvailabilityForm variant="cs_accent_bg cs_radius_5" />
          </div>
        </div>
      </div>
    </section>
  );
}
