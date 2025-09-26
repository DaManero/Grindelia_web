import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomsSliderStyle4 from '../../Slider/RoomsSliderStyle4';

export default function RoomSection4({ sectionTitle, sectionSubTitle, data }) {
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
      <RoomsSliderStyle4 data={data} />
    </>
  );
}
