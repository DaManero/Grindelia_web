import React from 'react';
import SectionHeading from '../../SectionHeading';

export default function AboutSection8({
  sectionTitle,
  sectionSubTitle,
  marqueeText,
  imgUrl1,
  imgUrl2,
  imgUrl3,
}) {
  return (
    <>
      <div className="container">
        <div className="cs_about cs_style_1">
          <SectionHeading
            sectionTitle={sectionTitle}
            sectionSubTitle={sectionSubTitle}
            bottomSpaceLg="80"
            bottomSpaceMd="50"
            variant="text-center"
          />
        </div>
      </div>
      <div className="cs_image_layer cs_style_5 position-relative">
        <div className="cs_moving_text_wrap cs_style_1 cs_fs_89 cs_accent_color cs_primary_font text-uppercase">
          <div className="cs_moving_text_in">
            <div className="cs_moving_text">{marqueeText}</div>
            <div className="cs_moving_text">{marqueeText}</div>
          </div>
        </div>
        <div className="cs_image_layer_in">
          <div className="cs_image_layer_item">
            <img src={imgUrl1} alt="Dine" />
          </div>
          <div className="cs_image_layer_item">
            <img src={imgUrl2} alt="Dine" />
          </div>
          <div className="cs_image_layer_item">
            <img src={imgUrl3} alt="Dine" />
          </div>
        </div>
      </div>
    </>
  );
}
