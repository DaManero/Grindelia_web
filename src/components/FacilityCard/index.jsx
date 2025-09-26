import React from "react";
import { Link } from "react-router-dom";
import ButtonStyle2 from "../Button/ButtonStyle2";
import { Icon } from "@iconify/react";

export default function FacilityCard({
  imgUrl,
  title,
  subTitle,
  btnText,
  btnUrl = "/",
  imgStyle,
  overlay,
}) {
  return (
    <div className="cs_post cs_style_1">
      <Link
        to={btnUrl}
        className="cs_post_thumb cs_radius_5 overflow-hidden d-block cs_mb_29 cs_mb_lg_20 position-relative"
        style={imgStyle ? { ...imgStyle } : undefined}
      >
        <div style={{ position: "relative" }}>
          {imgUrl && (
            <img
              src={imgUrl}
              alt="Feature"
              style={
                imgStyle
                  ? {
                      width: "100%",
                      display: "block",
                      borderRadius: imgStyle.borderRadius,
                    }
                  : undefined
              }
            />
          )}
          {overlay && <div style={overlay}></div>}
        </div>
        <span className="cs_hover_icon cs_center position-absolute cs_white_color cs_zindex_2 cs_radius_5">
          <Icon icon="octicon:link-external-16" width={20} height={20} />
        </span>
      </Link>
      <div className="cs_post_info">
        <h2 className="cs_post_title cs_fs_38 cs_mb_19">
          <Link to={btnUrl} dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
        <p
          className={`cs_post_subtitle ${btnText ? "cs_mb_36" : "mb-0"}`}
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
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
