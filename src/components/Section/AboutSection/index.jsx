import React from "react";
import ButtonStyle2 from "../../Button/ButtonStyle2";

export default function AboutSection({ data }) {
  const { title, subTitle, btnText, btnUrl } = data;
  return (
    <div
      style={{
        background: "var(--web-wash)",
        borderRadius: "18px",
        padding: "48px 0",
      }}
    >
      <div className="container">
        <div className="cs_about cs_style_1">
          <div className="cs_section_heading cs_style_1 text-center">
            {subTitle && (
              <p
                className="cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_28 cs_mb_lg_15 text-uppercase"
                style={{ color: "var(--gray)" }}
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            )}
            {title && (
              <h2
                className="cs_fs_67 cs_mb_45"
                style={{ color: "#798a74", fontWeight: 400 }}
              >
                {title}
              </h2>
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
      </div>
    </div>
  );
}
