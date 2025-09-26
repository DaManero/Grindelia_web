import React from 'react';
import VideoBlock from '../../VideoBlock';

export default function HeroSection10({ data }) {
  const { title, subTitle, circleText, circleImgUrl, videoBgUrl, videoUrl } =
    data;
  return (
    <>
      <section className="cs_hero cs_style_10">
        <div className="container">
          <div className="cs_hero_text">
            <h1
              className="cs_hero_title cs_fs_89 cs_mb_30"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className="cs_hero_subtitle cs_mb_75"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
          </div>
          <div className="position-relative">
            <div className="cs_hero_highlite cs_accent_color cs_center cs_primary_font">
              {circleText}
              <div className="cs_round_img cs_center">
                <img src={circleImgUrl} alt="Circle" />
              </div>
            </div>
            <VideoBlock
              videoBgUrl={videoBgUrl}
              videoUrl={videoUrl}
              variant="cs_type_5 cs_radius_15"
              hoverEffect
              playerStyle2
            />
          </div>
        </div>
      </section>
    </>
  );
}
