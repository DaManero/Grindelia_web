import React from 'react';
import SectionHeading from '../../SectionHeading';
import BlogSliderStyle3 from '../../Slider/BlogSliderStyle3';

export default function BlogSection3({ sectionTitle, sectionSubTitle, data }) {
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
      <BlogSliderStyle3 data={data} />
    </>
  );
}
