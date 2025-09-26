import React from 'react';
import { Link } from 'react-router-dom';
import ButtonStyle2 from '../Button/ButtonStyle2';

export default function RoomCardStyle8({
  imgUrl,
  title,
  subTitle,
  currency,
  price,
  pricePer,
  btnText,
  btnUrl,
  features = [],
}) {
  return (
    <div className="cs_card cs_style_7 cs_type_1 cs_radius_5 overflow-hidden">
      <Link
        to={btnUrl}
        className="cs_card_thumb d-block overflow-hidden position-relative cs_primary_bg"
      >
        <img src={imgUrl} alt="Room" />
      </Link>
      <div className="cs_card_info position-relative">
        <h2 className="cs_card_title cs_fs_50 cs_mb_4">
          <Link to={btnUrl}>{title}</Link>
        </h2>
        <div className="cs_card_price cs_mb_12">
          <span className="cs_primary_color">From</span>
          <span className="cs_accent_color cs_fs_38 cs_primary_font">
            {currency}
            {price}
            {pricePer}
          </span>
        </div>
        {subTitle && <p className="cs_mb_15">{subTitle}</p>}
        <div className="cs_mb_20">
          <ul className="cs_card_list cs_mp_0">
            {features?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {btnText && (
          <ButtonStyle2
            btnUrl={btnUrl}
            btnText={btnText}
            variant="cs_radius_20 cs_accent_btn"
            icon
          />
        )}
      </div>
    </div>
  );
}
