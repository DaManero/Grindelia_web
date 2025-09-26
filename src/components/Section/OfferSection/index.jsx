import React from 'react';
import SectionHeading from '../../SectionHeading';
import OfferCard from '../../OfferCard';

export default function OfferSection({ sectionTitle, sectionSubTitle, data }) {
  return (
    <>
      <div className="container">
        <SectionHeading
          sectionTitle={sectionTitle}
          sectionSubTitle={sectionSubTitle}
          bottomSpaceLg="80"
          bottomSpaceMd="50"
          variant="text-center"
        />
      </div>
      <div className="container">
        <div className="row cs_row_gap_60 cs_gap_y_40">
          {data?.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <OfferCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
