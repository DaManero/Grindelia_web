import React from 'react';
import SectionHeading from '../../SectionHeading';
import PostCard from '../../PostCard';

export default function BlogSection6({
  sectionTitle,
  sectionSubTitle,
  data,
  fullWidth,
}) {
  return (
    <>
      {(sectionTitle || sectionSubTitle) && (
        <div className="container">
          <SectionHeading
            sectionTitle={sectionTitle}
            sectionSubTitle={sectionSubTitle}
            bottomSpaceLg="80"
            bottomSpaceMd="50"
            variant="text-center"
          />
        </div>
      )}
      <div
        className={`${fullWidth ? 'container-fluie cs_plr_100' : 'container'}`}
      >
        <div className="row cs_row_gap_60 cs_gap_y_80">
          {data?.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <PostCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
