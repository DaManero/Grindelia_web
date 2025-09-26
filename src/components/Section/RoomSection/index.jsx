import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomsSliderStyle1 from '../../Slider/RoomsSliderStyle1';

export default function RoomSection({ sectionTitle, sectionSubTitle, data }) {
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
      <div className="container-fluid">
        <RoomsSliderStyle1 data={data} />
      </div>
    </>
  );
}
