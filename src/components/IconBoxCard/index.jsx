import React from 'react';

export default function IconBoxCard({ iconUrl, title, subTitle, colorMode }) {
  return (
    <div className="cs_iconbox cs_style_1">
      <div className="cs_iconbox_icon cs_mb_29">
        {iconUrl && <img src={iconUrl} alt="Icon" />}
      </div>
      {title && (
        <h3
          className={`cs_iconbox_title cs_mb_19 cs_fs_38 ${
            colorMode === 'dark' ? 'cs_white_color' : ''
          }`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {subTitle && (
        <p
          className={`cs_iconbox_subtitle mb-0 ${
            colorMode === 'dark' ? 'cs_ternary_color' : ''
          }`}
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
      )}
    </div>
  );
}
