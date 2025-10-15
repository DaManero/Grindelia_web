import React from "react";

import Spacing from "./Spacing";

export default function RoomDetails({ data, unavailable }) {
  const {
    title,
    title2,
    detailes,
    roomFacilitiesTitle,
    roomFacilities,
    formTitle,
    currency,
    price,
    pricePer,
  } = data;
  return (
    <>
      {title && (
        <>
          <div className="container">
            <div className="cs_plr_70">
              <h2
                className="cs_fs_67 mb-0 text-center"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </div>
          <Spacing lg="150" md="80" />
        </>
      )}

      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-12">
            <div className="cs_room_details">
              {title2 && (
                <h3
                  className="cs_fs_38 cs_mb_29 cs_mb_lg_20"
                  dangerouslySetInnerHTML={{ __html: title2 }}
                />
              )}
              {detailes && (
                <p
                  className="cs_mb_49 cs_mb_lg_30"
                  dangerouslySetInnerHTML={{ __html: detailes }}
                />
              )}
              {roomFacilitiesTitle && (
                <h3
                  className="cs_fs_31 cs_mb_29 cs_mb_lg_20"
                  dangerouslySetInnerHTML={{ __html: roomFacilitiesTitle }}
                />
              )}
              <ul className="cs_list cs_style_3 cs_mp_0">
                {roomFacilities?.map((item, index) => (
                  <li key={index}>
                    <img src={item.iconUrl} alt="Icon" />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
