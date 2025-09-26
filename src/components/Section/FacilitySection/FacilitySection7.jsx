import React from 'react';
import FacilityCardStyle5 from '../../FacilityCard/FacilityCardStyle5';
import FacilityCardStyle6 from '../../FacilityCard/FacilityCardStyle6';
import Spacing from '../../Spacing';

export default function FacilitySection7({ data }) {
  const isOdd = index => {
    return index % 2 !== 0;
  };
  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          {isOdd(index) && (
            <>
              <Spacing lg="80" md="80" />
              <FacilityCardStyle5 {...item} />
            </>
          )}
          {!isOdd(index) && (
            <>
              <FacilityCardStyle6 {...item} />
            </>
          )}
        </div>
      ))}
    </>
  );
}
