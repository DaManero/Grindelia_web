import React from 'react';
import SectionHeading from '../../SectionHeading';
import IconBoxCardStyle2 from '../../IconBoxCard/IconBoxCardStyle3';

export default function FeatureSection5({
  sectionTitle,
  sectionSubTitle,
  data,
}) {
  return (
    <>
      <div className="container">
        <SectionHeading
          sectionTitle={sectionTitle}
          sectionSubTitle={sectionSubTitle}
          bottomSpaceLg="80"
          bottomSpaceMd="50"
          variant="text-center"
        />
      </div>
      <div className="container-fluid cs_plr_100">
        <div className="row cs_row_gap_90 cs_gap_y_90">
          {data?.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <IconBoxCardStyle2 {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
