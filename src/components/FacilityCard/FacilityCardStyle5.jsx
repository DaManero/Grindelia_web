import React from 'react';
import SectionHeading from '../SectionHeading';

export default function FacilityCardStyle5({
  imgUrl,
  title,
  subTitle,
  description,
}) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-6">
          <div
            className="cs_image_layer cs_style_4 position-relative cs_bg_filed cs_width_left_50_vw"
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          />
        </div>
        <div className="col-lg-6">
          <div className="cs_pl_110">
            <SectionHeading
              sectionTitle={title}
              sectionSubTitle={subTitle}
              sectionDescription={description}
              bottomSpaceLg="0"
              bottomSpaceMd="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
