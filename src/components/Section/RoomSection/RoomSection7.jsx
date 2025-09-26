import React from 'react';
import SectionHeading from '../../SectionHeading';
import RoomCardStyle6 from '../../RoomCard/RoomCardStyle6';

export default function RoomSection7({ sectionTitle, sectionSubTitle, data }) {
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
        <div className="cs_grid_style_4">
          {data?.map((item, index) => (
            <div className="cs_grid_item" key={index}>
              <RoomCardStyle6 {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
