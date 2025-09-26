import React, { useState } from 'react';
import VideoModal from '../../VideoModal';

export default function HeroSection5({ data }) {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);
  const { title, subTitle, downSectionId, videoUrl } = data;

  const handelClick = () => {
    setIframeSrc(`${videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <div className="cs_hero cs_style_5 cs_primary_bg cs_center position-relative">
        <div
          className="cs_hero_bg cs_bg_filed h-100 w-100 position-absolute top-0 start-0 cs_bg_fixed"
          style={{ backgroundImage: 'url("/images/hero_bg_8.jpeg")' }}
        />
        <div className="container  position-relative cs_zindex_3">
          <div className="row cs_mb_28 cs_mb_lg_40">
            <div className="col-lg-8">
              {title && (
                <h1
                  className="cs_hero_title cs_fs_89 cs_white_color mb-0"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
            </div>
            <div className="col-lg-3 offset-lg-1">
              <span className="cs_play_btn_3" onClick={handelClick}>
                <svg
                  width={35}
                  height={35}
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_249_587)">
                    <path
                      d="M29.8842 11.6214L15.9746 1.42181C14.8882 0.626264 13.6027 0.147096 12.2606 0.0374155C10.9185 -0.0722649 9.57229 0.191827 8.37111 0.800417C7.16994 1.40901 6.16075 2.33832 5.4554 3.48536C4.75006 4.63239 4.37611 5.95234 4.37501 7.29889V27.7083C4.37291 29.0561 4.74491 30.3781 5.44958 31.5271C6.15426 32.6761 7.16396 33.607 8.36631 34.2162C9.56866 34.8254 10.9165 35.089 12.2597 34.9776C13.603 34.8662 14.889 34.3843 15.9746 33.5854L29.8842 23.3858C30.8071 22.7084 31.5576 21.8233 32.0749 20.802C32.5922 19.7808 32.8618 18.652 32.8618 17.5072C32.8618 16.3624 32.5922 15.2337 32.0749 14.2124C31.5576 13.1911 30.8071 12.306 29.8842 11.6287V11.6214Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_249_587">
                      <rect width={35} height={35} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 offset-lg-7">
              {subTitle && (
                <p
                  className="cs_hero_subtitle cs_ternary_color mb-0"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                />
              )}
            </div>
          </div>
        </div>
        <a href={`${downSectionId}`} className="cs_down_btn">
          <svg
            width={20}
            height={38}
            viewBox="0 0 20 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.11535 36.8847C9.60393 37.3732 10.3961 37.3732 10.8847 36.8847L18.8465 28.9228C19.3351 28.4342 19.3351 27.6421 18.8465 27.1535C18.3579 26.6649 17.5658 26.6649 17.0772 27.1535L10 34.2307L2.92279 27.1535C2.43421 26.6649 1.64206 26.6649 1.15348 27.1535C0.664903 27.6421 0.664903 28.4342 1.15348 28.9228L9.11535 36.8847ZM8.74891 0L8.74891 36H11.2511L11.2511 0L8.74891 0Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
}
