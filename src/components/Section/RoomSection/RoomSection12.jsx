import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomsSliderStyle6 from '../../Slider/RoomsSliderStyle6';

export default function RoomSection12({
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
      <RoomsSliderStyle6 data={data} lightColor={lightColor} />
    </>
  );
}
