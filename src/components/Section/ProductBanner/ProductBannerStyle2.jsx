import React from 'react';
import Breadcrumb from '../../Breadcrumb';

export default function ProductBannerStyle2({
  imgUrl,
  title,
  currency,
  price,
  pricePer,
}) {
  return (
    <div
      className="cs_page_heading_2 cs_primary_bg cs_bg_filed"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="container">
        <div className="cs_page_heading_in">
          <div className="">
            <h1 className="cs_white_color mb-0 cs_fs_67">{title}</h1>
            <Breadcrumb />
          </div>
          <div className="cs_page_heading_right">
            <p>{pricePer}</p>
            <h1 className="cs_white_color mb-0 cs_fs_67">
              {currency}
              {price}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
