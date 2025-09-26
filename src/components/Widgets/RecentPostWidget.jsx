import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentPostWidget({ widgetTitle, data }) {
  return (
    <>
      {widgetTitle && (
        <h4 className="cs_sidebar_widget_title">{widgetTitle}</h4>
      )}
      <ul className="cs_recent_posts">
        {data?.map((item, index) => (
          <li key={index}>
            <div className="cs_recent_post">
              <h3 className="cs_recent_post_title">
                <Link to={item.href}>{item.title}</Link>
              </h3>
              <p className="cs_recent_post_date mb-0">{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
