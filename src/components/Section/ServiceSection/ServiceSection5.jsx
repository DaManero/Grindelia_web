import React from 'react';
import SectionHeading from '../../SectionHeading';
import IconBoxCardStyle4 from '../../IconBoxCard/IconBoxCardStyle4';

export default function ServiceSection5({ data }) {
  const {
    imgUrl1,
    imgUrl2,
    title,
    subTitle,
    description,
    contactList = [],
  } = data;
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_45">
        <div className="col-lg-7">
          <div className="cs_pr_110">
            <div className="cs_image_layer cs_style_1 position-relative">
              <div className="cs_image_layer_1_wrap">
                <div className="cs_image_layer_1">
                  <img src={imgUrl1} alt="Service" className="cs_radius_5" />
                </div>
              </div>
              <div className="cs_image_layer_2_wrap">
                <div className="cs_image_layer_2">
                  <img src={imgUrl2} alt="Service" className="cs_radius_5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <SectionHeading
            sectionTitle={title}
            sectionSubTitle={subTitle}
            sectionDescription={description}
            bottomSpaceLg="20"
            bottomSpaceMd="20"
          />
          {contactList?.map((item, index) => (
            <div key={index}>
              <div className="cs_height_25 cs_height_lg_25" />
              <IconBoxCardStyle4 {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
