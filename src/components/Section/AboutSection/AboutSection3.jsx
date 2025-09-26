import React from 'react';
import VideoBlock from '../../VideoBlock';
import ButtonStyle2 from '../../Button/ButtonStyle2';

export default function AboutSection3({ data }) {
  const {
    title,
    subTitle,
    description,
    videoBgUrl,
    videoUrl,
    btnText,
    btnUrl,
  } = data;
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_45 cs_mobile_reverse">
        <div className="col-lg-6">
          <div className="cs_pr_110">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              {subTitle && (
                <p
                  className="cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_28 cs_mb_lg_15 text-uppercase"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                />
              )}
              {title && (
                <h2
                  className="cs_fs_67 cs_mb_40"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}

              {description && (
                <p
                  className="cs_mb_45"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}

              {btnText && (
                <ButtonStyle2
                  btnUrl={btnUrl}
                  btnText={btnText}
                  variant="cs_radius_5 cs_accent_btn"
                  icon
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <VideoBlock
            videoBgUrl={videoBgUrl}
            videoUrl={videoUrl}
            variant="cs_type_2"
            hoverEffect
            playerStyle2
          />
        </div>
      </div>
    </div>
  );
}
