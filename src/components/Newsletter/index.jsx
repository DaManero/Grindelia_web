import React from 'react';

export default function Newsletter({ variant, text, title, icon }) {
  return (
    <div className={`cs_newsletter cs_style_1 ${variant ? variant : ''}`}>
      {icon && (
        <span className="cs_newsletter_icon cs_center cs_accent_bg rounded-circle cs_mb_26">
          <svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_124_203)">
              <path
                d="M1.80486 8.33637C1.38631 8.45596 1.00624 8.68277 0.702253 8.99435C0.398268 9.30593 0.180908 9.69149 0.0716809 10.1129C-0.0375465 10.5342 -0.0348553 10.9768 0.0794879 11.3969C0.193831 11.8169 0.415863 12.1998 0.723615 12.5076L4.98861 16.7676V25.0001H13.2299L17.5236 29.2876C17.7541 29.5201 18.0282 29.7047 18.3302 29.8308C18.6323 29.9569 18.9563 30.0221 19.2836 30.0226C19.4987 30.0222 19.713 29.9945 19.9211 29.9401C20.3423 29.834 20.7281 29.6188 21.0397 29.3162C21.3513 29.0136 21.5777 28.6343 21.6961 28.2164L29.9886 0.0263672L1.80486 8.33637ZM2.49986 10.7401L23.7849 4.46512L7.49111 20.7326V15.7326L2.49986 10.7401ZM19.2999 27.5201L14.2661 22.5001H9.26611L25.5574 6.22262L19.2999 27.5201Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_124_203">
                <rect width={30} height={30} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      )}
      {title && (
        <h2
          className="cs_fs_50 cs_mb_26"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      <form action="/" className="cs_newsletter_form position-relative">
        <input
          type="email"
          className="cs_newsletter_input cs_radius_5"
          placeholder="Enter Your Email Address"
        />
        <button className="cs_btn cs_style_2 cs_medium cs_radius_5 cs_fs_15">
          Subscribe
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
        </button>
      </form>
      {text && (
        <p
          className="cs_newsletter_subtitle cs_ternary_color cs_mb_30"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  );
}
