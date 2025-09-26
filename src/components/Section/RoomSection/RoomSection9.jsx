import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomCardStyle7 from '../../RoomCard/RoomCardStyle7';

export default function RoomSection9({ sectionTitle, sectionSubTitle, data }) {
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
        <div className="row cs_gap_y_80">
          {data?.map((item, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              <RoomCardStyle7 {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
