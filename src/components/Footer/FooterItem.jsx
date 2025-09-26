import React from 'react';

export default function FooterItem({ title, titleVariant, children }) {
  return (
    <div className="cs_footer_grid_item">
      <div className="cs_footer_item">
        {title && (
          <h2
            className={`cs_widget_title cs_fs_28 cs_white_color ${
              titleVariant ? titleVariant : ''
            }`}
          >
            <span>{title}</span>
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
