import React from 'react';
import SectionHeading from '../../SectionHeading';
import ContactForm from '../../Forms/ContactForm';
import IconBoxCardStyle4 from '../../IconBoxCard/IconBoxCardStyle4';
import Spacing from '../../Spacing';

export default function ContactSection3({
  sectionTitle,
  sectionSubTitle,
  sectionDescription,
  contactThumb,
  data,
}) {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_50">
          <div className="col-lg-6">
            <div className="cs_pr_100">
              <SectionHeading
                sectionTitle={sectionTitle}
                sectionSubTitle={sectionSubTitle}
                sectionDescription={sectionDescription}
                bottomSpaceLg="0"
                bottomSpaceMd="0"
                variant="cs_mb_37"
              />
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_image_layer cs_style_3 position-relative">
              <img src={contactThumb} alt="Contact" className="cs_radius_5" />
            </div>
          </div>
        </div>
      </div>
      {data?.length > 0 && (
        <>
          <Spacing lg="150" md="72" />
          <div className="container">
            <div className="cs_contact_info_boxes">
              {data?.map((item, index) => (
                <div className="cs_contact_info_box" key={index}>
                  <IconBoxCardStyle4 {...item} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
