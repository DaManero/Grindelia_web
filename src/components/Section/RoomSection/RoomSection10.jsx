import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomCardStyle2 from '../../RoomCard/RoomCardStyle2';

export default function RoomSection10({ sectionTitle, sectionSubTitle, data }) {
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
            <div className="col-lg-6" key={index}>
              <RoomCardStyle2 {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
