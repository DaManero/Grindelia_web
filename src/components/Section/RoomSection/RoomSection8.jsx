import React, { useEffect, useState } from 'react';
import SectionHeading from '../../SectionHeading';
import RoomCard from '../../RoomCard';
import Spacing from '../../Spacing';

export default function RoomSection8({
  sectionTitle,
  sectionSubTitle,
  lightColor,
  data,
}) {
  const [rooms, setRooms] = useState([]);
  const [active, setActive] = useState('standard');
  const handelFilter = category => {
    const filteredRooms = data.filter(room => room.category === category);
    setActive(category);
    setRooms(filteredRooms);
  };
  useEffect(() => {
    const filteredRooms = data.filter(room => room.category === 'standard');
    setRooms(filteredRooms);
  }, []);
  return (
    <div className="cs_tabs cs_style_1">
      <div className="container-fluid cs_plr_100">
        <div className="cs_tabs_heading">
          <SectionHeading
            sectionTitle={sectionTitle}
            sectionSubTitle={sectionSubTitle}
            bottomSpaceLg="80"
            bottomSpaceMd="50"
            lightColor={lightColor}
          />
          <ul className="cs_mp_0 cs_tab_links cs_style_1 cs_fs_15 cs_medium cs_white_color">
            <li className={`${active === 'deluxe' ? 'active' : ''}`}>
              <span onClick={() => handelFilter('deluxe')}>Deluxe</span>
            </li>
            <li className={`${active === 'standard' ? 'active' : ''}`}>
              <span onClick={() => handelFilter('standard')}>Standard</span>
            </li>
            <li className={`${active === 'superior' ? 'active' : ''}`}>
              <span onClick={() => handelFilter('superior')}>Superior</span>
            </li>
          </ul>
        </div>
        <Spacing lg="80" md="50" />
      </div>
      <div className="cs_tab_body">
        <div className="container-fluid cs_plr_100">
          <div className="row cs_row_gap_60 cs_gap_y_60">
            {rooms?.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <RoomCard variant="cs_color_1" {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
