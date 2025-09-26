import React from 'react';
import ButtonStyle2 from '../Button/ButtonStyle2';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function PostCard({
  imgUrl,
  postedBy,
  date,
  title,
  btnText,
  btnUrl,
}) {
  return (
    <div className="cs_post cs_style_1 cs_size_1">
      <Link
        to={btnUrl}
        className="cs_post_thumb cs_radius_5 overflow-hidden d-block cs_mb_29 cs_mb_lg_20 position-relative"
      >
        <img src={imgUrl} alt="Feature" />
        <span className="cs_hover_icon cs_center position-absolute cs_white_color cs_zindex_2 cs_radius_5">
          <Icon icon="octicon:link-external-16" width={20} height={20} />
        </span>
      </Link>
      <div className="cs_post_info">
        <div className="cs_post_meta cs_mb_24">
          <span>By {postedBy}</span>
          <span className="cs_post_meta_seperator" />
          <span>{date}</span>
        </div>
        <h2 className="cs_post_title cs_fs_38 cs_mb_19">
          <Link to={btnUrl}>{title}</Link>
        </h2>
        {btnText && (
          <ButtonStyle2
            btnUrl={btnUrl}
            btnText={btnText}
            variant="cs_radius_5"
            icon
          />
        )}
      </div>
    </div>
  );
}
