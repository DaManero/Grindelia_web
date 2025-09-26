import React from 'react';
import SectionHeading from '../../SectionHeading';
import IconBoxCard from '../../IconBoxCard';

export default function FeatureSection2({
  sectionTitle,
  sectionSubTitle,
  data,
  sectionHeadingAlignment,
  colorMode,
}) {
  return (
    <>
      <div className="container">
        <SectionHeading
          sectionTitle={sectionTitle}
          sectionSubTitle={sectionSubTitle}
          bottomSpaceLg="80"
          bottomSpaceMd="50"
          variant={
            sectionHeadingAlignment ? sectionHeadingAlignment : 'text-center'
          }
        />
      </div>
      <div className="container">
        <div className="row cs_row_gap_50 cs_gap_y_75">
          {data?.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <IconBoxCard colorMode={colorMode} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
