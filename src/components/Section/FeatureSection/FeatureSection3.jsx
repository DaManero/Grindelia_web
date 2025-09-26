import React from 'react';
import IconBoxCardStyle2 from '../../IconBoxCard/IconBoxCardStyle2';
import SectionHeading from '../../SectionHeading';

export default function FeatureSection3({
  data,
  sectionTitle,
  sectionSubTitle,
}) {
  return (
    <>
      {(sectionTitle || sectionSubTitle) && (
        <div className="container">
          <SectionHeading
            sectionTitle={sectionTitle}
            sectionSubTitle={sectionSubTitle}
            bottomSpaceLg="80"
            bottomSpaceMd="50"
            variant="text-center"
          />
        </div>
      )}

      <div className="container">
        <div className="row cs_row_gap_60 cs_gap_y_90">
          {data?.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <IconBoxCardStyle2 {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
