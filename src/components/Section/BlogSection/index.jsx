import React from 'react';
import SectionHeading from '../../SectionHeading';
import BlogSliderStyle1 from '../../Slider/BlogSliderStyle1';

export default function BlogSection({ sectionTitle, sectionSubTitle, data }) {
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
      <BlogSliderStyle1 data={data} />
    </>
  );
}
