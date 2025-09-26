import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import AvailabilityForm from '../../Forms/AvailabilityForm';
import RoomsSliderStyle5 from '../../Slider/RoomsSliderStyle5';

export default function RoomSection5({ sectionTitle, sectionSubTitle, data }) {
  return (
    <>
      <div className="container">
        <SectionHeading
          sectionTitle={sectionTitle}
          sectionSubTitle={sectionSubTitle}
          bottomSpaceLg="45"
          bottomSpaceMd="45"
          variant="text-center"
          lightColor
        />
        <AvailabilityForm variant="cs_accent_bg cs_radius_5 cs_type_2" />
        <Spacing lg="80" md="50" />
      </div>
      <div className="container-fluid p-0">
        <RoomsSliderStyle5 data={data} />
      </div>
    </>
  );
}
