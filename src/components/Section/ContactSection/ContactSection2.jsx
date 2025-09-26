import React from 'react';
import GoogleMap from '../../Widgets/GoogleMap';
import SectionHeading from '../../SectionHeading';
import IconBoxCardStyle4 from '../../IconBoxCard/IconBoxCardStyle4';

export default function ContactSection2({
  sectionTitle,
  sectionSubTitle,
  sectionDescription,
  data,
}) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-6">
          <div className="cs_width_left_50_vw">
            <GoogleMap variant="cs_google_map cs_style_1 cs_type_1" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cs_pl_110">
            <SectionHeading
              sectionTitle={sectionTitle}
              sectionSubTitle={sectionSubTitle}
              sectionDescription={sectionDescription}
              bottomSpaceLg="0"
              bottomSpaceMd="0"
              variant="cs_mb_45"
            />
            {data?.map((item, index) => (
              <IconBoxCardStyle4 {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
