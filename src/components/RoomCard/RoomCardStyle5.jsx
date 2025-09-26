import React from 'react';
import { Link } from 'react-router-dom';

export default function RoomCardStyle5({
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
        to={href}
        className="cs_card cs_style_5 cs_bg_filed cs_primary_bg overflow-hidden cs_center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="container">
          <div className="cs_card_in position-relative cs_zindex_2">
            <div className="cs_card_info position-relative">
              <h2 className="cs_card_title cs_fs_50 cs_mb_4 cs_white_color">
                {title}
              </h2>
              <ul className="cs_card_list cs_mp_0 cs_ternary_color">
                {features?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="cs_card_price">
              <span className="cs_accent_color">From</span>
              <span className="cs_fs_38 cs_white_color cs_primary_font">
                {currency}
                {price}
                {pricePer}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
