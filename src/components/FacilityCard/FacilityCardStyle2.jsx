import React from 'react';
import { Link } from 'react-router-dom';

export default function FacilityCardStyle2({ imgUrl, title, subTitle, href }) {
  return (
    <Link
      to={href}
      className="cs_feature_box cs_style_3 position-relative text-center cs_center cs_primary_bg"
    >
      {imgUrl && (
        <div className="cs_feature_box_bg cs_bg_filed">
          <img src={imgUrl} alt="Thumb" />
        </div>
      )}
      <div className="cs_feature_box_text position-relative cs_zindex_3">
        {title && (
          <h3
            className="cs_fs_50 cs_white_color cs_mb_37"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subTitle && (
          <p
            className="mb-0 cs_white_color"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        )}
      </div>
    </Link>
  );
}
