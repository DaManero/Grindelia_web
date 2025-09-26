import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialMedia() {
  return (
    <div className="cs_social_btns cs_style_1">
      <Link target="_blank" to="/" className="cs_center">
        <Icon icon="fa-brands:linkedin-in" width="14" height="14" />
      </Link>
      <Link target="_blank" to="/" className="cs_center">
        <Icon icon="fa6-brands:x-twitter" width="14" height="14" />
      </Link>
      <Link target="_blank" to="/" className="cs_center">
        <Icon icon="fa-brands:youtube" width="14" height="14" />
      </Link>
      <Link target="_blank" to="/" className="cs_center">
        <Icon icon="fa-brands:facebook-f" width="14" height="14" />
      </Link>
    </div>
  );
}
