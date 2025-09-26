import React from 'react';
import Spacing from '../../Spacing';
import ButtonStyle2 from '../../Button/ButtonStyle2';

export default function AboutSection4({ data }) {
  const { title, subTitle, imgUrl, btnText, btnUrl, featureList } = data;
  return (
    <div className="container">
      <div className="cs_about cs_style_3">
        <div className="cs_section_heading cs_style_1 text-center">
          {subTitle && (
            <p
              className="cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_28 cs_mb_lg_15 text-uppercase"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
          )}
          {title && (
            <h2
              className="cs_fs_67 mb-0 position-relative cs_zindex_2"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {imgUrl && <img src={imgUrl} alt="Thumb" className="cs_about_img" />}
          {btnText && (
            <>
              <Spacing lg="80" md="40" />
              <ButtonStyle2
                btnUrl={btnUrl}
                btnText={btnText}
                variant="cs_radius_20"
                icon
              />
            </>
          )}
          {featureList && (
            <>
              <Spacing lg="80" md="40" />
              <div className="overflow-hidden">
                <ul className="cs_about_feature_list_1 cs_mp_0">
                  {featureList?.map((item, index) => (
                    <li className="text-center" key={index}>
                      <h3 className="cs_fs_38 cs_accent_color cs_mb_9">
                        {item.value}
                      </h3>
                      <h3 className="cs_fs_38 mb-0">{item.title}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
