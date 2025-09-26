import React from 'react';

export default function IconBoxCardStyle2({ iconUrl, title, subTitle }) {
  return (
    <div className="cs_iconbox cs_style_2 text-center">
      <div className="cs_iconbox_icon cs_mb_29 cs_center">
        <img src={iconUrl} alt="Icon" />
      </div>
      {title && (
        <h2
          className="cs_fs_38 cs_mb_19"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {subTitle && (
        <p className="mb-0" dangerouslySetInnerHTML={{ __html: subTitle }} />
      )}
    </div>
  );
}
