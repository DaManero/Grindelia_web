import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomCardStyle5 from '../../RoomCard/RoomCardStyle5';

export default function RoomSection6({ sectionTitle, sectionSubTitle, data }) {
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
      <div className="position-relative">
        {data?.map((item, index) => (
          <div className="cs_sticky_1" key={index}>
            <RoomCardStyle5 {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
