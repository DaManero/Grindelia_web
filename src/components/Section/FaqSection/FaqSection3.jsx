import React from 'react';
import Accordion from '../../Accordion';
import SectionHeading from '../../SectionHeading';

export default function FaqSection3({ sectionTitle, sectionSubTitle, data }) {
  return (
    <div className="container">
      <SectionHeading
        sectionTitle={sectionTitle}
        sectionSubTitle={sectionSubTitle}
        bottomSpaceLg="60"
        bottomSpaceMd="50"
        variant="text-center"
      />
      <div className="row">
        <div className="col-xxl-6 offset-xxl-3 col-lg-8 offset-lg-2">
          <Accordion data={data} />
        </div>
      </div>
    </div>
  );
}
