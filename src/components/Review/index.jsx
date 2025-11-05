import React from "react";
import { Icon } from "@iconify/react";

export default function Review({ reviewNumber, variant }) {
  const starColor = "#EDDCC3"; // dorado claro
  const starBgColor = "#F5F4F1"; // fondo claro para estrellas vacías
  return (
    <div className={`cs_rating ${variant ? variant : "cs_accent_color"}`}>
      <i>
        <Icon
          icon="fa-regular:star"
          width="18"
          height="18"
          style={{ color: starBgColor }}
        />
      </i>
      <i>
        <Icon
          icon="fa-regular:star"
          width="18"
          height="18"
          style={{ color: starBgColor }}
        />
      </i>
      <i>
        <Icon
          icon="fa-regular:star"
          width="18"
          height="18"
          style={{ color: starBgColor }}
        />
      </i>
      <i>
        <Icon
          icon="fa-regular:star"
          width="18"
          height="18"
          style={{ color: starBgColor }}
        />
      </i>
      <i>
        <Icon
          icon="fa-regular:star"
          width="18"
          height="18"
          style={{ color: starBgColor }}
        />
      </i>
      <div
        className="cs_rating_percentage"
        style={{ width: `${reviewNumber * 20}%` }}
      >
        <i>
          <Icon
            icon="fa-solid:star"
            width="18"
            height="18"
            style={{ color: starColor }}
          />
        </i>
        <i>
          <Icon
            icon="fa-solid:star"
            width="18"
            height="18"
            style={{ color: starColor }}
          />
        </i>
        <i>
          <Icon
            icon="fa-solid:star"
            width="18"
            height="18"
            style={{ color: starColor }}
          />
        </i>
        <i>
          <Icon
            icon="fa-solid:star"
            width="18"
            height="18"
            style={{ color: starColor }}
          />
        </i>
        <i>
          <Icon
            icon="fa-solid:star"
            width="18"
            height="18"
            style={{ color: starColor }}
          />
        </i>
      </div>
    </div>
  );
}
