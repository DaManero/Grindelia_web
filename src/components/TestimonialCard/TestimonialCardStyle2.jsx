import React from 'react';

export default function TestimonialCardStyle2({
  avatarImgUrl,
  avatarName,
  avatarDesignation,
  avatarText,
}) {
  return (
    <div className="cs_testimonial cs_style_2">
      <div className="position-relative cs_zindex_2">
        {avatarText && (
          <blockquote className="cs_testimonial_blockquote cs_fs_38 cs_primary_font cs_primary_color fst-normal cs_mb_58 cs_mb_lg_30">
            {avatarText}
          </blockquote>
        )}
        <div className="cs_testimonial_avatar">
          {avatarImgUrl && <img src={avatarImgUrl} alt={avatarName} />}
          <div className="cs_testimonial_avatar_right">
            {avatarName && <h3 className="cs_fs_28 mb-0">{avatarName}</h3>}
            {avatarDesignation && <p className="mb-0">{avatarDesignation}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
