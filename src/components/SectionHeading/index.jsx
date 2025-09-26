import React from 'react';
import Spacing from '../Spacing';

export default function SectionHeading({
  sectionTitle,
  sectionSubTitle,
  sectionDescription,
  bottomSpaceLg,
  bottomSpaceMd,
  variant,
  lightColor,
}) {
  return (
    <>
      <div
        className={`cs_section_heading cs_style_1 ${variant ? variant : ''}`}
      >
        {sectionSubTitle && (
          <p
            className={`cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_28 cs_mb_lg_15 text-uppercase ${
              lightColor ? 'cs_accent_color' : ''
            }`}
            dangerouslySetInnerHTML={{ __html: sectionSubTitle }}
          />
        )}
        {sectionTitle && (
          <h2
            className={`cs_fs_67 mb-0 ${lightColor ? 'cs_white_color' : ''}`}
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
        )}
        {sectionDescription && (
          <>
            <Spacing lg="18" md="18" />
            <p
              className="mb-0"
              dangerouslySetInnerHTML={{ __html: sectionDescription }}
            />
          </>
        )}
      </div>
      {(bottomSpaceLg || bottomSpaceMd) && (
        <Spacing lg={bottomSpaceLg} md={bottomSpaceMd} />
      )}
    </>
  );
}
