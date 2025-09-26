import React from 'react';
import Spacing from '../../Spacing';

export default function FacilitySection2({ data, fullWidth }) {
  return (
    <div>
      {data?.map((item, index) => (
        <div
          className={`cs_feature_box cs_style_2 ${
            fullWidth ? 'cs_type_1' : ''
          }`}
          key={index}
        >
          <div className="container">
            <div className="row cs_gap_y_50">
              <div className="col-lg-6">
                {item.thumbUrl1 && (
                  <div className="cs_feature_box_thumb cs_mb_55 cs_mb_lg_50">
                    {fullWidth ? (
                      <div
                        className="cs_feature_thumb cs_bg_filed cs_primary_bg"
                        style={{ backgroundImage: `url(${item.thumbUrl1})` }}
                      ></div>
                    ) : (
                      <img
                        src={item.thumbUrl1}
                        alt="Thumb"
                        className="cs_feature_thumb_1"
                      />
                    )}
                  </div>
                )}
                <div className="cs_pr_110">
                  <ul className="cs_feature_list cs_mp_0">
                    {item.facilityList?.map((item, index) => (
                      <li key={index}>
                        <span className="cs_feature_icon cs_accent_bg cs_center rounded-circle">
                          <img src={item.iconUrl} alt="" />
                        </span>
                        <h3 className="cs_feature_title cs_fs_28 cs_mb_20">
                          {item.featureTitle}
                        </h3>
                        <p className="mb-0">{item.featureSubTitle}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 cs_mobile_reverse_sp">
                <Spacing lg="30" md="0" />
                <div className="cs_pl_110">
                  {item.subTitle && (
                    <p
                      className="cs_section_subtitle cs_medium cs_letter_spacing_1 cs_mb_28 cs_mb_lg_15 text-uppercase"
                      dangerouslySetInnerHTML={{ __html: item.subTitle }}
                    />
                  )}
                  {item.title && (
                    <h2
                      className="cs_fs_67 cs_mb_26"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  )}
                  {item.description && (
                    <p
                      className="cs_mb_67 cs_mb_lg_1"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}
                </div>
                {item.thumbUrl2 && (
                  <div className="cs_feature_box_thumb cs_mb_lg_40">
                    {fullWidth ? (
                      <div
                        className="cs_feature_thumb cs_bg_filed cs_primary_bg"
                        style={{ backgroundImage: `url(${item.thumbUrl2})` }}
                      ></div>
                    ) : (
                      <img
                        src={item.thumbUrl2}
                        alt="Thumb"
                        className="cs_feature_thumb_1"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
