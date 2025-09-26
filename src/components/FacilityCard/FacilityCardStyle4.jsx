import React from 'react';
import { Link } from 'react-router-dom';

export default function FacilityCardStyle4({
  title,
  subTitle,
  imgUrl,
  price,
  href,
}) {
  return (
    <Link
      to={href}
      className="cs_feature_box cs_style_3 position-relative text-center cs_center cs_hobble cs_primary_bg cs_type_1"
    >
      <div className="cs_feature_box_bg cs_bg_filed cs_hover_layer_2">
        {imgUrl && <img src={imgUrl} alt="Thumb" />}
      </div>
      <div className="cs_feature_box_text position-relative cs_zindex_3 cs_hover_layer_2">
        {title && <h3 className="cs_fs_50 cs_white_color cs_mb_37">{title}</h3>}
        {subTitle && (
          <p className={`cs_white_color ${price ? 'cs_mb_37' : 'mb-0'}`}>
            {subTitle}
          </p>
        )}
        {price && (
          <h4 className="mb-0 cs_fs_28 cs_white_color">Price : {price}</h4>
        )}
      </div>
    </Link>
  );
}
