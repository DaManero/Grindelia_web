import React from "react";

export default function HeroStyle1({ title, subTitle, bgImgUrl }) {
  return (
    <div className="cs_hero cs_style_1 cs_center text-center position-relative cs_primary_bg">
      <figure
        className="cs_slider_parallax_bg cs_hero_bg cs_bg_filed h-100 w-100 position-absolute top-0 start-0 mb-0"
        style={{ backgroundImage: `url(${bgImgUrl})` }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(30, 30, 30, 0.45)",
          zIndex: 2,
        }}
      />
      <div className="container position-relative cs_zindex_3">
        <div className="cs_hero_text">
          {subTitle && (
            <p className="cs_hero_subtitle cs_white_color text-uppercase d-inline-flex position-relative cs_mb_25 cs_letter_spacing_1">
              <img
                className="cs_hero_subtitle_icon_1 position-absolute start-0"
                src="/images/icons/star.svg"
                alt="Star"
              />
              <span dangerouslySetInnerHTML={{ __html: subTitle }} />
              <img
                className="cs_hero_subtitle_icon_2 position-absolute end-0"
                src="/images/icons/star.svg"
                alt="Star"
              />
            </p>
          )}

          {title && (
            <h1
              className="cs_hero_title cs_fs_89 cs_white_color mb-0"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
