import React from 'react';
import SectionHeading from '../../SectionHeading';
import TeamMember from '../../TeamMember';

export default function TeamSection({ sectionTitle, sectionSubTitle, data }) {
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
        <div className="row cs_gap_y_60 cs_row_gap_100">
          {data?.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <TeamMember {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
