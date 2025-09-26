import React, { useEffect } from 'react';

export default function GalleryCard({ imgUrl, title, hover }) {
  return (
    <div
      className="cs_gallery_item cs_lightbox_item cs_style_1 d-block cs_bg_filed position-relative"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {hover && (
        <div className="cs_gallery_item_hover cs_primary_font cs_white_color cs_fs_38 cs_center text-center">
          {title}
        </div>
      )}

      <img src={imgUrl} alt="" className="d-none" />
    </div>
  );
}
