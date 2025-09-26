import React from "react";
import Spacing from "../Spacing";
import Review from "../../components/Review";

export default function TestimonialCard({
  avatarImgUrl,
  avatarName,
  avatarDesignation,
  avatarText,
  avatarReview,
}) {
  const textColor = "#F5F4F1"; // color claro recomendado
  return (
    <div className="cs_testimonial cs_style_1 text-center position-relative">
      <div className="position-relative cs_zindex_2">
        <div className="cs_testimonial_avatar cs_mb_50 cs_mb_lg_20">
          {avatarName && (
            <h3 className="cs_fs_28 mb-0" style={{ color: textColor }}>
              {avatarName}
            </h3>
          )}
          {avatarDesignation && (
            <p className="mb-0" style={{ color: textColor }}>
              {avatarDesignation}
            </p>
          )}
        </div>
        <blockquote
          className="cs_testimonial_blockquote cs_fs_50 cs_primary_font fst-normal cs_mb_75 cs_mb_lg_30"
          style={{ color: textColor }}
        >
          {avatarText}
        </blockquote>
        <Spacing lg="75" md="30" />
        <Review reviewNumber={avatarReview} variant="cs_green_color" />
      </div>
    </div>
  );
}
