import React from 'react';
import ButtonStyle2 from '../Button/ButtonStyle2';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import VideoBlock from '../VideoBlock';

export default function PostCardStyle5({
  imgUrl,
  postedBy,
  date,
  comments,
  title,
  subTitle,
  btnText,
  btnUrl,
  videoUrl,
  variant,
}) {
  return (
    <div className={`cs_post cs_style_1 ${variant ? variant : 'cs_size_4'}`}>
      {videoUrl ? (
        <VideoBlock
          videoBgUrl={imgUrl}
          videoUrl={videoUrl}
          playerStyle2
          variant="cs_type_1 cs_mb_30 cs_radius_5 cs_post_thumb"
        />
      ) : (
        <Link
          to={btnUrl}
          className="cs_post_thumb cs_radius_5 overflow-hidden d-block cs_mb_30 position-relative"
        >
          {imgUrl && <img src={imgUrl} alt="Feature" />}
          <span className="cs_hover_icon cs_center position-absolute cs_white_color cs_zindex_2 cs_radius_5">
            <Icon icon="octicon:link-external-16" width={20} height={20} />
          </span>
        </Link>
      )}

      <div className="cs_post_info">
        <div className="cs_post_meta_4 cs_mb_13">
          {postedBy && <span>By {postedBy}</span>}
          {date && <span>{date}</span>}
          {comments && <span>{comments}</span>}
        </div>
        <h2 className="cs_post_title cs_fs_38 cs_mb_17">
          <Link to={btnUrl}>{title}</Link>
        </h2>
        <p className="cs_subtitle cs_mb_37">{subTitle}</p>
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
