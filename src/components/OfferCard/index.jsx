import React from 'react';
import ButtonStyle2 from '../Button/ButtonStyle2';
import { Link } from 'react-router-dom';

export default function OfferCard({
  imgUrl,
  title,
  subTitle,
  btnText,
  btnUrl,
}) {
  return (
    <div className="cs_card cs_style_6 text-center cs_radius_5 overflow-hidden">
      <Link
        to={btnUrl}
        className="cs_card_thumb overflow-hidden d-block position-relative"
      >
        <img src={imgUrl} alt={title} className="w-100" />
      </Link>
      <div className="cs_card_info">
        {title && (
          <h2 className="cs_card_title cs_fs_38 cs_mb_19">
            <Link to={btnUrl}>{title}</Link>
          </h2>
        )}
        {subTitle && <p className="cs_card_subtitle cs_mb_36">{subTitle}</p>}
        {btnText && (
          <ButtonStyle2
            btnUrl={btnUrl}
            btnText={btnText}
            variant="cs_radius_5"
            icon
          />
        )}
      </div>
    </div>
  );
}
