import React from 'react';
import GoogleMap from '../../Widgets/GoogleMap';
import SectionHeading from '../../SectionHeading';
import IconBoxCardStyle4 from '../../IconBoxCard/IconBoxCardStyle4';

export default function ContactSection({
  sectionTitle,
  sectionSubTitle,
  sectionDescription,
  data,
}) {
  return (
    <div className="container-fluid cs_plr_100">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-xl-8 col-lg-7">
          <GoogleMap variant="cs_google_map cs_style_1 cs_type_1" />
        </div>
        <div className="col-xl-4 col-lg-5">
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
