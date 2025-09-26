import React from 'react';
import Accordion from '../../Accordion';
import SectionHeading from '../../SectionHeading';

export default function FaqSection({
  sectionTitle,
  sectionSubTitle,
  thumbUrl,
  data,
}) {
  return (
    <div className="container">
      {(sectionTitle || sectionSubTitle) && (
        <SectionHeading
          sectionTitle={sectionTitle}
          sectionSubTitle={sectionSubTitle}
          bottomSpaceLg="80"
          bottomSpaceMd="50"
          variant="text-center"
        />
      )}

      <div className="row align-items-center cs_gap_y_30">
        <div className="col-lg-6">
          <div className="cs_pr_110">
            {thumbUrl && <img src={thumbUrl} alt="FAQ" />}
          </div>
        </div>
        <div className="col-lg-6">
          <Accordion data={data} />
        </div>
      </div>
    </div>
  );
}
