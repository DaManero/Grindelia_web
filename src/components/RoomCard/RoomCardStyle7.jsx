import React from "react";
import { Link } from "react-router-dom";

export default function RoomCardStyle7({
  imgUrl,
  title,
  currency,
  price,
  pricePer,
  href,
  features = [],
  variant,
}) {
  return (
    <div
      className={`cs_card cs_style_7 cs_radius_5 overflow-hidden ${
        variant ? variant : ""
      }`}
    >
      <Link
        to={href}
        className="cs_card_thumb d-block overflow-hidden position-relative cs_primary_bg"
      >
        <img src={imgUrl} alt="Room" />
        <span className="cs_card_btn position-absolute cs_zindex_2">
          <span className="cs_btn cs_style_2 cs_accent_btn cs_medium cs_radius_5 cs_fs_15">
            <b>View Details</b>
            <span>
              <i>
                <svg
                  width={9}
                  height={9}
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00431 0.872828C9.00431 0.458614 8.66852 0.122828 8.25431 0.122828L1.50431 0.122827C1.0901 0.122827 0.754309 0.458614 0.754309 0.872828C0.754309 1.28704 1.0901 1.62283 1.50431 1.62283H7.50431V7.62283C7.50431 8.03704 7.84009 8.37283 8.25431 8.37283C8.66852 8.37283 9.00431 8.03704 9.00431 7.62283L9.00431 0.872828ZM1.53033 8.65747L8.78464 1.40316L7.72398 0.342497L0.46967 7.59681L1.53033 8.65747Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
              <i>
                <svg
                  width={9}
                  height={9}
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00431 0.872828C9.00431 0.458614 8.66852 0.122828 8.25431 0.122828L1.50431 0.122827C1.0901 0.122827 0.754309 0.458614 0.754309 0.872828C0.754309 1.28704 1.0901 1.62283 1.50431 1.62283H7.50431V7.62283C7.50431 8.03704 7.84009 8.37283 8.25431 8.37283C8.66852 8.37283 9.00431 8.03704 9.00431 7.62283L9.00431 0.872828ZM1.53033 8.65747L8.78464 1.40316L7.72398 0.342497L0.46967 7.59681L1.53033 8.65747Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
            </span>
          </span>
        </span>
      </Link>
      <div className="cs_card_info position-relative">
        <h2 className="cs_card_title cs_fs_50 cs_mb_4">
          <Link to={href}>{title}</Link>
        </h2>
        <div className="cs_card_price cs_mb_17">
          <span className="cs_accent_color cs_fs_38 cs_primary_font">
            {currency}
            {price}
            {pricePer}
          </span>
        </div>
        <ul className="cs_card_list cs_mp_0">
          {features?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
