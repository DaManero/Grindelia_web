import React from 'react';
import SectionHeading from '../../SectionHeading';
import IconBoxCard from '../../IconBoxCard';

export default function FeatureSection({
  sectionTitle,
  sectionSubTitle,
  data,
}) {
  return (
    <div className="container">
      <div className="row cs_gap_y_60 cs_row_gap_60">
        <div className="col-lg-7
          <SectionHeading
            sectionTitle={sectionTitle}
            sectionSubTitle={sectionSubTitle}
            bottomSpaceLg="0"
            bottomSpaceMd="0"
            lightColor
          />
        </div>
        <div className="col-lg-1 cs_mobile_hide" />
        {data?.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <IconBoxCard colorMode="dark" {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
