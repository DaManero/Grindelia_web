import React from 'react';

export default function IconBoxCardStyle5({ iconUrl, title, subTitle }) {
  return (
    <div className="cs_iconbox cs_style_5 text-center">
      {iconUrl && (
        <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_mb_30 cs_mb_lg_15 cs_center">
          <img src={iconUrl} alt="" />
        </div>
      )}
      {title && (
        <h3
          className="cs_iconbox_title cs_fs_38 cs_mb_19 cs_mb_lg_10"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {subTitle && (
        <p
          className="cs_iconbox_subtitle mb-0"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
      )}
    </div>
  );
}
