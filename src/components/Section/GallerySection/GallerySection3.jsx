import React from 'react';
import SectionHeading from '../../SectionHeading';
import GallerySliderStyle2 from '../../Slider/GallerySliderStyle2';

export default function GallerySection3({
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
      <GallerySliderStyle2 data={data} />
    </>
  );
}
