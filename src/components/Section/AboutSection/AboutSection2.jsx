import React from 'react';
import ButtonStyle2 from '../../Button/ButtonStyle2';

export default function AboutSection2({ data }) {
  const { title, imgUrl, btnText, btnUrl } = data;
  return (
    <div className="container">
      <div className="cs_about cs_style_2 text-center">
        {imgUrl && (
          <img src={imgUrl} alt="Icon" className="cs_mb_66 cs_mb_lg_40" />
        )}
        {title && (
          <h2
            className="cs_fs_67 cs_mb_80 cs_mb_lg_50"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
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
