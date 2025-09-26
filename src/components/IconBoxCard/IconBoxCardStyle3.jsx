import React from 'react';

export default function IconBoxCardStyle2({ iconUrl, title, subTitle }) {
  return (
    <div className="cs_iconbox cs_style_3 cs_radius_5 cs_white_bg">
      <div className="cs_iconbox_icon cs_mb_29 cs_center cs_radius_5 cs_white_bg">
        <img src={iconUrl} alt="Icon" />
      </div>
      {title && <h3 className="cs_iconbox_title cs_mb_19 cs_fs_38">{title}</h3>}
      {subTitle && <p className="cs_iconbox_subtitle mb-0">{subTitle}</p>}
    </div>
  );
}
