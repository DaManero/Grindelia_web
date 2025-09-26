import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function PostCardStyle4({
  imgUrl,
  postedBy,
  date,
  title,
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
        <div className="cs_post_meta cs_mb_10">
          <span>By {postedBy}</span>
          <span>{date}</span>
        </div>
        <hr className="cs_mb_7" />
        <h2 className="cs_post_title cs_fs_38 mb-0 pb-0">
          <Link to={btnUrl}>{title}</Link>
        </h2>
      </div>
    </div>
  );
}
