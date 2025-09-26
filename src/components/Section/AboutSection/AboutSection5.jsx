import React from 'react';
import ButtonStyle2 from '../../Button/ButtonStyle2';

export default function AboutSection5({ data }) {
  const { title, subTitle, btnText, btnUrl } = data;
  return (
    <div className="container">
      <div className="cs_about cs_style_4">
        <div className="cs_section_heading cs_style_1 cs_mb_45">
          {subTitle && (
            <p
              className="cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_28 cs_mb_lg_15 text-uppercase"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
          )}
          {title && (
            <h2
              className="cs_fs_67 mb-0"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
        </div>
        <div className="text-end">
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
    </div>
  );
}
