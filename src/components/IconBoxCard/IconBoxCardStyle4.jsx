import React from 'react';

export default function IconBoxCardStyle4({ iconUrl, title, subTitle }) {
  return (
    <div className="cs_iconbox cs_style_4">
      {iconUrl && (
        <div className="cs_iconbox_icon cs_center rounded-circle">
          <img src={iconUrl} alt="Icon" />
        </div>
      )}
      <div className="cs_iconbox_right">
        {title && (
          <h3
            className="cs_fs_28 cs_mb_5"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subTitle && (
          <p className="mb-0" dangerouslySetInnerHTML={{ __html: subTitle }} />
        )}
      </div>
    </div>
  );
}
