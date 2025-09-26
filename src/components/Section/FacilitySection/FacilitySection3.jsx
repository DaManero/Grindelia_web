import React, { useState } from 'react';
import SectionHeading from '../../SectionHeading';
import FacilityCardStyle2 from '../../FacilityCard/FacilityCardStyle2';

export default function FacilitySection3({
  sectionTitle,
  sectionSubTitle,
  data,
}) {
  const [active, setActive] = useState(1);
  const handelActive = index => {
    setActive(index);
  };
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
      <div className="cs_expent_section">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`cs_expent_item cs_hover_active ${
              active === index ? 'active' : ''
            }`}
            onMouseEnter={() => handelActive(index)}
          >
            <FacilityCardStyle2 {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
