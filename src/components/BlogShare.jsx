import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogShare() {
  return (
    <div className="cs_post_share">
      <div className="cs_categories_wrap">
        <h4 className="mb-0 cs_primary_color cs_secondary_font cs_fs_15">
          Tags:
        </h4>
        <div className="cs_categories">
          <Link to="/blog/blog-details" className="cs_category">
            Spa
          </Link>
          <Link to="/blog/blog-details" className="cs_category">
            Beauty
          </Link>
        </div>
      </div>
      <div className="cs_social_share_btns_wrap">
        <h4 className="mb-0 cs_primary_color cs_secondary_font cs_fs_15">
          Share :
        </h4>
        <div className="cs_social_share_btns">
          <Link to="/blog/blog-details">
            <Icon icon="fa6-brands:x-twitter" width="14" height="14" />
          </Link>
          <Link to="/blog/blog-details">
            <Icon icon="fa-brands:facebook-f" width="14" height="14" />
          </Link>
          <Link to="/blog/blog-details">
            <Icon icon="fa-brands:linkedin-in" width="14" height="14" />
          </Link>
        </div>
      </div>
    </div>
  );
}
