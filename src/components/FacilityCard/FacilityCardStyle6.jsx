import React from 'react';
import SectionHeading from '../SectionHeading';

export default function FacilityCardStyle6({
  imgUrl,
  title,
  subTitle,
  description,
}) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-6">
          <div className="cs_pr_110">
            <SectionHeading
              sectionTitle={title}
              sectionSubTitle={subTitle}
              sectionDescription={description}
              bottomSpaceLg="0"
              bottomSpaceMd="0"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="cs_image_layer cs_style_4 position-relative cs_bg_filed cs_width_right_50_vw"
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
