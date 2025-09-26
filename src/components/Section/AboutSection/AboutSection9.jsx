import React from 'react';
import ButtonStyle2 from '../../Button/ButtonStyle2';
import SectionHeading from '../../SectionHeading';

export default function AboutSection9({ data }) {
  const { imgUrl, title, subTitle, description, btnText, btnUrl } = data;
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_45">
        <div className="col-lg-6">
          <SectionHeading
            sectionTitle={title}
            sectionSubTitle={subTitle}
            sectionDescription={description}
            bottomSpaceLg="35"
            bottomSpaceMd="35"
          />
          {btnText && (
            <ButtonStyle2
              btnUrl={btnUrl}
              btnText={btnText}
              variant="cs_radius_20"
              icon
            />
          )}
        </div>
        <div className="col-lg-6">
          <div className="cs_pl_110">
            <div className="cs_image_layer cs_style_3 cs_type_1 position-relative">
              <img src={imgUrl} alt="Contact" className="cs_radius_5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
