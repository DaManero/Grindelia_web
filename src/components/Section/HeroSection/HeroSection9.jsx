import React from 'react';
import ButtonStyle2 from '../../Button/ButtonStyle2';
import Review from '../../Review';
import VideoBlock from '../../VideoBlock';

export default function HeroSection9({ data }) {
  const {
    title,
    subTitle,
    description,
    btnUrl,
    btnText,
    reviewNumber,
    videoBgUrl,
    videoUrl,
  } = data;

  return (
    <>
      <section className="cs_hero cs_style_9 cs_center position-relative cs_gray_bg">
        <div className="container">
          <div className="row align-items-center cs_gap_y_50">
            <div className="col-lg-6">
              <div className="cs_pr_110">
                <div className="cs_section_heading cs_style_1">
                  {subTitle && (
                    <p
                      className="cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_30 cs_mb_lg_15 text-uppercase"
                      dangerouslySetInnerHTML={{ __html: subTitle }}
                    />
                  )}

                  {title && (
                    <h1
                      className="cs_fs_67 cs_mb_40 cs_mb_lg_30"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  )}
                  {description && (
                    <p
                      className="cs_mb_45 cs_mb_lg_35"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  )}

                  <div className="cs_hero_btns">
                    <ButtonStyle2
                      btnUrl={btnUrl}
                      btnText={btnText}
                      icon
                      variant="cs_accent_btn cs_radius_5"
                    />
                    <div className="cs_google_review">
                      <svg
                        width={44}
                        height={45}
                        viewBox="0 0 44 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_898_123)">
                          <path
                            d="M0 22.4634C0 10.5612 9.6832 0.878052 21.5854 0.878052C26.3923 0.878052 30.9421 2.42459 34.743 5.35054L29.727 11.8664C27.3768 10.0574 24.5615 9.10105 21.5854 9.10105C14.2174 9.10105 8.223 15.0954 8.223 22.4634C8.223 29.8314 14.2174 35.8258 21.5854 35.8258C27.5197 35.8258 32.5627 31.9377 34.3006 26.5749H21.5854V18.3519H43.1707V22.4634C43.1707 34.3656 33.4875 44.0488 21.5854 44.0488C9.6832 44.0488 0 34.3656 0 22.4634Z"
                            fill="#1B1B1B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_898_123">
                            <rect
                              width="43.1707"
                              height="43.1707"
                              fill="white"
                              transform="translate(0 0.878052)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="cs_google_review_right">
                        <Review reviewNumber={reviewNumber} />
                        <p className="mb-0">{reviewNumber} Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <VideoBlock
                videoBgUrl={videoBgUrl}
                videoUrl={videoUrl}
                variant="cs_type_2"
                hoverEffect
                playerStyle2
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
