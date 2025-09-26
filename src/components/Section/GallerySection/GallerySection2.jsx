import React from 'react';
import SectionHeading from '../../SectionHeading';
import GallerySliderStyle1 from '../../Slider/GallerySliderStyle1';

export default function GallerySection2({
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
      <GallerySliderStyle1 data={data} />
    </>
  );
}
