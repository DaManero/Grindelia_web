import React from 'react';
import ReactPlayer from 'react-player';
import AvailabilityForm from '../../Forms/AvailabilityForm';
import ButtonStyle2 from '../../Button/ButtonStyle2';

export default function HeroSection4({ data }) {
  const { title, subTitle, videoUrl, videoBgUrl } = data;
  return (
    <section>
      <div
        className="cs_hero cs_style_4 cs_primary_bg cs_bg_filed text-center position-relative youtube-bg"
        style={{ backgroundImage: `url(${videoBgUrl})` }}
      >
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls={false}
          loop={true}
          playing={true}
          muted={true}
          playIcon={false}
          className="cs_video_bg"
        />
        <div className="cs_form_wrap">
          <div className="container">
            <AvailabilityForm variant="cs_accent_bg cs_radius_5 cs_type_2" />
          </div>
        </div>
        <div className="cs_hero_text_wrap cs_center">
          <div className="container position-relative cs_zindex_3">
            <div className="cs_hero_text">
              <p className="cs_hero_subtitle cs_white_color text-uppercase d-inline-flex position-relative cs_mb_25 cs_letter_spacing_1">
                <img
                  className="cs_hero_subtitle_icon_1 position-absolute start-0"
                  src="/images/icons/star.svg"
                  alt="Star"
                />
                <span dangerouslySetInnerHTML={{ __html: subTitle }} />
                <img
                  className="cs_hero_subtitle_icon_2 position-absolute end-0"
                  src="/images/icons/star.svg"
                  alt="Star"
                />
              </p>
              <h1
                className="cs_hero_title cs_fs_89 cs_white_color cs_mb_35"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <ButtonStyle2
                btnUrl="/about"
                btnText="Discover More"
                icon
                variant="cs_radius_20 cs_white_btn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
