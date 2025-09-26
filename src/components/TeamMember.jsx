import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamMember({ imgUrl, name, designation, socialLinks }) {
  const [linkedin, twitter, youtube, facebook] = socialLinks;
  return (
    <div className="cs_team cs_style_1">
      <div className="cs_team_member_img cs_mb_29 cs_mb_lg_20 cs_radius_5 position-relative overflow-hidden">
        <img src={imgUrl} alt={name} />
        <div className="cs_member_social_btns">
          <Link to={linkedin}>
            <Icon icon="fa-brands:linkedin-in" width="16" height="16" />
          </Link>
          <Link to={twitter}>
            <Icon icon="fa6-brands:x-twitter" width="16" height="16" />
          </Link>
          <Link to={youtube}>
            <Icon icon="fa-brands:youtube" width="16" height="16" />
          </Link>
          <Link to={facebook}>
            <Icon icon="fa-brands:facebook-f" width="16" height="16" />
          </Link>
        </div>
      </div>
      <div className="cs_team_info">
        {name && (
          <h3 className="cs_team_member_name cs_fs_28 cs_mb_7">{name}</h3>
        )}
        {designation && (
          <p className="cs_team_member_designation mb-0">{designation}</p>
        )}
      </div>
    </div>
  );
}
