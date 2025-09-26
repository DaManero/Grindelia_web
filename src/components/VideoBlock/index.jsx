import React, { useState, useRef } from "react";
import VideoModal from "../VideoModal";

export default function VideoBlock({
  videoBgUrl,
  videoUrl,
  variant,
  hoverEffect,
  playerStyle1,
  playerStyle2,
  title,
}) {
  /* Start Video Modal Function */
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    setIframeSrc(`${videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };
  /* End Video Modal Function */

  /* Start Hubble Effect */
  const hobbleRef = useRef(null);

  const handleMouseMove = (event) => {
    const element = hobbleRef.current;
    const rect = element.getBoundingClientRect();
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;
    const coorX = halfW - (event.clientX - rect.left);
    const coorY = halfW - (event.clientY - rect.top);
    const degX3 = (coorY / halfH) * -15 + "px";
    const degY3 = (coorX / halfW) * 15 + "px";

    const layer1 = element.querySelector(".cs_hover_layer_1");

    if (layer1) {
      layer1.style.transform = `perspective(800px) translateX(${degX3}) translateY(${degY3}) scale(1.04)`;
    }
  };

  const handleMouseOut = () => {
    const element = hobbleRef.current;
    const layer1 = element.querySelector(".cs_hover_layer_1");
    if (layer1) {
      layer1.style.transform = "";
    }
  };
  /* End Hubble Effect */
  return (
    <>
      <div
        className={`cs_video_block cs_style_1 cs_video_open text-center cs_center position-relative ${
          variant ? variant : ""
        }`}
        onClick={handelClick}
        ref={hobbleRef}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        {title && (
          <h2 className="cs_video_block_title cs_fs_150 mb-0 position-relative cs_zindex_3">
            {title}
          </h2>
        )}
        {variant === "cs_type_2" && <div className="cs_video_block_border" />}
        <div
          className="cs_video_block_bg h-100 w-100 position-absolute start-0 top-0 cs_bg_filed cs_primary_bg"
          style={{
            backgroundImage: `url(${videoBgUrl})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(30, 30, 30, 0.45)",
            zIndex: 2,
            pointerEvents: "none",
            borderRadius: "inherit",
          }}
        />
        {playerStyle1 && (
          <span className="cs_play_btn">
            <svg
              width={70}
              height={70}
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 0C15.7004 0 0 15.7004 0 35C0 54.2996 15.7004 70 35 70C54.2996 70 70 54.2996 70 35C70 15.7004 54.2996 0 35 0ZM35 64.1667C18.9175 64.1667 5.83333 51.0825 5.83333 35C5.83333 18.9175 18.9175 5.83333 35 5.83333C51.0825 5.83333 64.1667 18.9175 64.1667 35C64.1667 51.0825 51.0825 64.1667 35 64.1667ZM23.3333 51.4704L52.6167 35L23.3333 18.5296V51.4733V51.4704ZM29.1667 28.5017L40.7167 35L29.1667 41.4983V28.5017Z"
                fill="currentColor"
              />
            </svg>
          </span>
        )}

        {playerStyle2 && (
          <span
            className={`cs_play_btn_2 cs_center rounded-circle cs_white_color ${
              hoverEffect ? "cs_hover_layer_1" : ""
            }`}
          >
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
        )}
      </div>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
}
