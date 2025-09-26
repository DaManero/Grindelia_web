import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCardStyle3({
  imgUrl,
  category,
  date,
  title,
  href,
  timeDuration,
  variant,
}) {
  return (
    <div className={`cs_post cs_style_2 ${variant}"`}>
      <Link
        to={href}
        className="cs_post_thumb cs_radius_5 overflow-hidden d-block cs_mb_30 position-relative"
      >
        <img src={imgUrl} alt="Feature" />
      </Link>
      <div className="cs_post_info">
        {date && (
          <div className="cs_posted_by cs_mb_5">
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(.clip0_438_162)">
                <path
                  d="M15.75 1.5H13.5V0H12V1.5H6V0H4.5V1.5H2.25C1.0125 1.5 0 2.5125 0 3.75V18H18V3.75C18 2.5125 16.9875 1.5 15.75 1.5ZM2.25 3H15.75C16.1625 3 16.5 3.3375 16.5 3.75V5.25H1.5V3.75C1.5 3.3375 1.8375 3 2.25 3ZM12 6.75V9H9.75V6.75H12ZM8.25 9H6V6.75H8.25V9ZM4.5 9H1.5V6.75H4.5V9ZM4.5 10.5V12.75H1.5V10.5H4.5ZM6 10.5H8.25V12.75H6V10.5ZM8.25 14.25V16.5H6V14.25H8.25ZM9.75 14.25H12V16.5H9.75V14.25ZM9.75 12.75V10.5H12V12.75H9.75ZM13.5 10.5H16.5V12.75H13.5V10.5ZM13.5 9V6.75H16.5V9H13.5ZM1.5 14.25H4.5V16.5H1.5V14.25ZM13.5 16.5V14.25H16.5V16.5H13.5Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath className="clip0_438_162">
                  <rect width={18} height={18} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>{date}</span>
          </div>
        )}
        <h2 className="cs_post_title cs_fs_38 cs_mb_10">
          <Link to={href}>{title}</Link>
        </h2>
        <p className="cs_post_meta_3 mb-0">
          <span>{category}</span>
          <span>{timeDuration}</span>
        </p>
      </div>
    </div>
  );
}
