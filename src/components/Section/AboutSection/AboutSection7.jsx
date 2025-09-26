import React from 'react';
import VideoBlock from '../../VideoBlock';
import ButtonStyle2 from '../../Button/ButtonStyle2';

export default function AboutSection7({ data }) {
  const {
    title,
    subTitle,
    description,
    experience,
    videoBgUrl,
    videoUrl,
    btnText,
    btnUrl,
  } = data;
  return (
    <div className="container-fluid p-0 position-relative">
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-7">
            <div className="cs_pr_110">
              <VideoBlock
                videoBgUrl={videoBgUrl}
                videoUrl={videoUrl}
                variant="cs_type_3 cs_radius_5"
                playerStyle2
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="cs_section_heading cs_style_1">
              <div className="cs_section_heading">
                {subTitle && (
                  <p
                    className="cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_28 cs_mb_lg_15 text-uppercase"
                    dangerouslySetInnerHTML={{ __html: subTitle }}
                  />
                )}
                {title && (
                  <h2
                    className="cs_fs_67 cs_mb_28"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}
                {experience && (
                  <h2
                    className="cs_about_experience_text_1 cs_fs_89 cs_accent_color"
                    dangerouslySetInnerHTML={{ __html: experience }}
                  />
                )}
                {description && (
                  <p
                    className="cs_mb_46 cs_mb_lg_35"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                )}
                {btnText && (
                  <ButtonStyle2
                    btnUrl={btnUrl}
                    btnText={btnText}
                    variant="cs_radius_20 cs_accent_btn"
                    icon
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
