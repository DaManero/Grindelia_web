import React from 'react';
import { Link } from 'react-router-dom';

export default function RoomCardStyle6({
  imgUrl,
  title,
  currency,
  price,
  pricePer,
  href,
  features = [],
}) {
  return (
    <>
      <Link
        className="cs_card cs_style_4 cs_type_1 d-block position-relative"
        to={href}
      >
        <img className="cs_card_thumb w-100 h-100" src={imgUrl} alt="Room" />
        <span className="cs_card_price cs_accent_color cs_medium cs_fs_15 cs_white_bg position-absolute">
          {currency}
          {price}
          {pricePer}
        </span>
        <div className="cs_card_info position-absolute start-0 top-0 h-100 w-100">
          <div>
            <h2 className="cs_card_title cs_fs_50 mb-0 cs_white_color">
              {title}
            </h2>
            <ul className="cs_card_list cs_mp_0 cs_ternary_color">
              {features?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
}
