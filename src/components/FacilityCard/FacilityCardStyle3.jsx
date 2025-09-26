import React from 'react';
import VideoBlock from '../VideoBlock';
import ButtonStyle2 from '../Button/ButtonStyle2';

export default function FacilityCardStyle3({
  title,
  subTitle,
  description,
  imgUrl,
  videoUrl,
  btnUrl,
  btnText,
}) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-7">
          <div className="cs_pr_110">
            <VideoBlock
              videoBgUrl={imgUrl}
              videoUrl={videoUrl}
              variant="cs_type_3"
              playerStyle2
            />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading">
              {subTitle && (
                <p className="cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_28 cs_mb_lg_15 text-uppercase">
                  {subTitle}
                </p>
              )}
              {title && <h2 className="cs_fs_67 cs_mb_28">{title}</h2>}
              {description && (
                <p className="cs_mb_46 cs_mb_lg_35">{description}</p>
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
  );
}
