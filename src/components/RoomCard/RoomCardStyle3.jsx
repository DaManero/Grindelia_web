import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonStyle2 from '../Button/ButtonStyle2';

export default function RoomCardStyle3({
  imgUrl,
  title,
  currency,
  price,
  pricePer,
  href,
  btnText,
  features = [],
  variant,
}) {
  return (
    <>
      <div className="cs_card cs_style_3">
        <div className="cs_card_thumb d-block overflow-hidden position-relative cs_primary_bg">
          <img src={imgUrl} alt="Room" />
          <div className="cs_card_hover cs_center position-absolute start-0 top-0 h-100 w-100 cs_zindex_2">
            <div className="cs_card_btn">
              {btnText && (
                <ButtonStyle2
                  btnUrl={href}
                  btnText={btnText}
                  variant="cs_radius_5 cs_accent_btn"
                  icon
                />
              )}
            </div>
          </div>
        </div>
        <div className="cs_card_info  cs_gray_bg">
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
        </div>
      </div>

      {/* <div className={`cs_card cs_style_3 ${variant ? variant : ''}`}>
        <Link
          to={href}
          className="cs_card_thumb d-block cs_radius_5 overflow-hidden position-relative cs_primary_bg"
        >
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
        </div>
      </div> */}
    </>
  );
}
