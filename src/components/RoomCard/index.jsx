import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RoomCard({
  imgUrl,
  title,
  currency,
  price,
  pricePer,
  href,
  features = [],
  variant,
}) {
  return (
    <div className={`cs_card cs_style_1 ${variant ? variant : ''}`}>
      <Link
        to={href}
        className="cs_card_thumb d-block cs_radius_5 overflow-hidden position-relative cs_primary_bg"
      >
        <img src={imgUrl} alt="Room" />
        <img src={imgUrl} alt="Room" />
      </Link>
      <div className="cs_card_info position-relative">
        <h2 className="cs_card_title cs_fs_50 cs_mb_4">
          <Link to={href}>{title}</Link>
        </h2>
        <div className="cs_card_price cs_mb_17">
          <span className="cs_primary_color">From</span>
          <span className="cs_accent_color cs_fs_38 cs_primary_font">
            {currency}
            {price}
            {pricePer}
          </span>
        </div>
        <ul className="cs_card_list cs_mp_0">
          {features?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {!variant && (
          <Link to={href} className="cs_card_btn cs_center">
            <Icon icon="ph:caret-right-bold" width="24" height="24" />
          </Link>
        )}
      </div>
    </div>
  );
}
