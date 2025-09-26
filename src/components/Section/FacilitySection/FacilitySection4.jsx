import React from 'react';
import FacilityCardStyle3 from '../../FacilityCard/FacilityCardStyle3';

export default function FacilitySection4({ data }) {
  return (
    <div className="cs_facility_wrap_1">
      {data.map((item, index) => (
        <FacilityCardStyle3 {...item} key={index} />
      ))}
    </div>
  );
}
