import React from "react";
import SectionHeading from "../../SectionHeading";
import FacilitySliderStyle2 from "../../Slider/FacilitySliderStyle2";

export default function FacilitySection5({
  sectionTitle,
  sectionSubTitle,
  data,
  sectionTitleClass,
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
          lightColor={true}
        />
      </div>
      <div className="container-fluid p-0">
        <FacilitySliderStyle2 data={data} />
      </div>
    </>
  );
}
