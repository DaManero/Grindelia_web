import React from 'react';
import SectionHeading from '../../SectionHeading';
import FacilitySliderStyle1 from '../../Slider/FacilitySliderStyle1';

export default function FacilitySection({
  sectionTitle,
  sectionSubTitle,
  data,
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
        />
      </div>
      <FacilitySliderStyle1 data={data} />
    </>
  );
}
