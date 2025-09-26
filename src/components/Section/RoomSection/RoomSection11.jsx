import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomCardStyle8 from '../../RoomCard/RoomCardStyle8';

export default function RoomSection11({ sectionTitle, sectionSubTitle, data }) {
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
        <div className="row cs_gap_y_50">
          {data?.map((item, index) => (
            <div className="col-lg-12" key={index}>
              <RoomCardStyle8 variant="cs_type_1" {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
