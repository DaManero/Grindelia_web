import React from 'react';
import SectionHeading from '../../SectionHeading';
import IconBoxCardStyle5 from '../../IconBoxCard/IconBoxCardStyle5';

export default function FeatureSection7({
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
      <div className="container">
        <div className="row cs_row_gap_80 cs_gap_y_60">
          {data?.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <IconBoxCardStyle5 {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
