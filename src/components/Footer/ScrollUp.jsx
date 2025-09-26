import React from 'react';

export default function ScrollUp({ variant }) {
  return (
    <a
      href="#top"
      className={`cs_scrollup cs_center ${variant ? variant : ''}`}
    >
      <svg
        width={15}
        height={7}
        viewBox="0 0 15 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 6.18793L14.1169 7L7.93687 1.31723C7.81958 1.20941 7.66053 1.14885 7.49468 1.14885C7.32884 1.14885 7.16978 1.20941 7.0525 1.31723L0.884376 6.99022L0 6.177L6.16812 0.505163C6.51998 0.181708 6.99715 0 7.49468 0C7.99222 0 8.46938 0.181708 8.82125 0.505163L15 6.18793Z"
          fill="white"
        />
      </svg>
      <span className="cs_scrollup_bg_dotted cs_accent_color">
        <svg
          width={56}
          height={56}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={28}
            cy={28}
            r="27.5"
            stroke="currentColor"
            strokeDasharray="5 5"
          />
        </svg>
      </span>
    </a>
  );
}
