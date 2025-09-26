import React from 'react';
import { Link } from 'react-router-dom';

export default function TagWidget({ widgetTitle, data }) {
  return (
    <>
      {widgetTitle && (
        <h4 className="cs_sidebar_widget_title">{widgetTitle}</h4>
      )}
      <div className="tagcloud">
        {data?.map((item, index) => (
          <Link to={item.href} className="tag-cloud-link" key={index}>
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
}
