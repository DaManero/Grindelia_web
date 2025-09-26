import React from 'react';
import ContactForm from '../../../components/Forms/ContactForm';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxCardStyle4 from '../../IconBoxCard/IconBoxCardStyle4';

export default function ContactSection4({
  sectionTitle,
  sectionSubTitle,
  sectionDescription,
  data,
}) {
  return (
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
            />
            <Spacing lg="56" md="30" />
            {data?.map((item, index) => (
              <IconBoxCardStyle4 {...item} key={index} />
            ))}
          </div>
        </div>
        <div className="col-lg-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
