import React from 'react';
import SectionHeading from '../../SectionHeading';
import FacilityCard from '../../FacilityCard';

export default function FacilitySection6({
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
        <div className="row cs_row_gap_60 cs_gap_y_75">
          {data?.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <FacilityCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
