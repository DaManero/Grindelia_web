import React from 'react';
import Accordion from '../../Accordion';
import SectionHeading from '../../SectionHeading';

export default function FaqSection2({
  sectionTitle,
  sectionSubTitle,
  thumbUrl,
  data,
  fullWidth,
}) {
  return (
    <div className="container">
      <SectionHeading
        sectionTitle={sectionTitle}
        sectionSubTitle={sectionSubTitle}
        bottomSpaceLg="80"
        bottomSpaceMd="50"
        variant="text-center"
      />
      <div className="row align-items-center cs_gap_y_30 cs_mobile_reverse">
        <div className="col-lg-6">
          <Accordion data={data} />
        </div>
        <div className="col-lg-6">
          <div className="cs_pl_110">
            {fullWidth ? (
              <div className="cs_width_right_50_vw-110">
                <div
                  className="faq_thumb_1 cs_bg_filed"
                  style={{ backgroundImage: `url(${thumbUrl})` }}
                ></div>
              </div>
            ) : (
              <>{thumbUrl && <img src={thumbUrl} alt="FAQ" />}</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
