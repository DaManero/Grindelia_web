import React from 'react';

export default function Marquee({ text, imgUrl, variant }) {
  return (
    <div
      className={`cs_moving_text_wrap cs_style_1 cs_fs_89 ${
        variant ? variant : ''
      } cs_primary_font`}
    >
      <div className="cs_moving_text_in">
        <div className="cs_moving_text">
          {text} {imgUrl && <img src={imgUrl} alt="" />}
        </div>
        <div className="cs_moving_text">
          {text} {imgUrl && <img src={imgUrl} alt="" />}
        </div>
      </div>
    </div>
  );
}
