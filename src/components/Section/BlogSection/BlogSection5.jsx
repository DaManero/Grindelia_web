import React from 'react';
import SectionHeading from '../../SectionHeading';
import PostCardStyle4 from '../../PostCard/PostCardStyle4';

export default function BlogSection5({ sectionTitle, sectionSubTitle, data }) {
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
      <div className="container">
        <div className="row cs_gap_y_50 cs_row_gap_60">
          {data.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <PostCardStyle4 {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
