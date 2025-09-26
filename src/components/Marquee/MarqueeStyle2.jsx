import React from 'react';
import Spacing from '../Spacing';

export default function MarqueeStyle2({ text, imgUrl, variant }) {
  return (
    <div
      className={`cs_moving_text_wrap cs_style_1 cs_type_1 cs_primary_bg cs_fs_89 ${
        variant ? variant : ''
      } cs_primary_font`}
    >
      <Spacing lg="10" md="10" />
      <div className="cs_moving_text_in">
        <div className="cs_moving_text">
          {text} {imgUrl && <img src={imgUrl} alt="" />}
        </div>
        <div className="cs_moving_text">
          {text} {imgUrl && <img src={imgUrl} alt="" />}
        </div>
      </div>
      <Spacing lg="10" md="10" />
    </div>
  );
}
