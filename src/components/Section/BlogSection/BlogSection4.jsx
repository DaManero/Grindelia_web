import React from 'react';
import SectionHeading from '../../SectionHeading';
import BlogSliderStyle4 from '../../Slider/BlogSliderStyle4';

export default function BlogSection4({ sectionTitle, sectionSubTitle, data }) {
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
      <BlogSliderStyle4 data={data} />
    </>
  );
}
