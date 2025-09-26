import React from 'react';
import SectionHeading from '../../SectionHeading';
import BlogSliderStyle2 from '../../Slider/BlogSliderStyle2';

export default function BlogSection2({ sectionTitle, sectionSubTitle, data }) {
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
      <BlogSliderStyle2 data={data} />
    </>
  );
}
