import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomsSliderStyle2 from '../../Slider/RoomsSliderStyle2';

export default function RoomSection2({
  sectionTitle,
  sectionSubTitle,
  data,
  lightColor,
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
          lightColor={lightColor}
        />
      </div>
      <RoomsSliderStyle2 data={data} lightColor={lightColor} />
    </>
  );
}
