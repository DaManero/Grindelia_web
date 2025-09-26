import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomsSliderStyle3 from '../../Slider/RoomsSliderStyle3';

export default function RoomSection3({ sectionTitle, sectionSubTitle, data }) {
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
      <RoomsSliderStyle3 data={data} />
    </>
  );
}
