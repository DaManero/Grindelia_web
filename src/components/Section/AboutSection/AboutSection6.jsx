import React from 'react';
import ButtonStyle2 from '../../Button/ButtonStyle2';
import Spacing from '../../Spacing';

export default function AboutSection6({ data }) {
  const {
    title,
    subTitle,
    descriptionLeft,
    descriptionRight,
    imgUrl,
    btnText,
    btnUrl,
  } = data;
  return (
    <div className="container">
      <div className="cs_about cs_style_1">
        <div className="cs_section_heading cs_style_1 text-center">
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
      </div>
      <Spacing lg="80" md="50" />
      <div className="cs_about cs_style_5">
        <div className="row cs_gap_y_30">
          <div className="col-lg-4">
            <div className="cs_pr_100">
              <Spacing lg="70" md="0" />
              {descriptionLeft && (
                <p
                  className="mb-0"
                  dangerouslySetInnerHTML={{ __html: descriptionLeft }}
                />
              )}
            </div>
          </div>
          <div className="col-lg-4">
            {imgUrl && <img src={imgUrl} alt="About" />}
          </div>
          <div className="col-lg-4">
            <div className="cs_pl_100 cs_about_right_text">
              <div>
                {descriptionRight && (
                  <p
                    className="cs_mb_33"
                    dangerouslySetInnerHTML={{ __html: descriptionRight }}
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
                <Spacing lg="70" md="0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
