import React from 'react';

export default function AuthorSection({ data }) {
  const { authorImgUrl, authorText, authorSignUrl, authorDesignation } = data;
  return (
    <div className="container">
      <div className="cs_author_card text-center">
        {authorImgUrl && (
          <div className="cs_author_img cs_accent_color cs_mb_67 cs_mb_lg_50">
            <img src={authorImgUrl} alt="Author" />
            <svg
              width={250}
              height={250}
              viewBox="0 0 250 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={125}
                cy={125}
                r="124.5"
                stroke="currentColor"
                strokeDasharray="10 10"
              />
            </svg>
          </div>
        )}
        {authorText && (
          <h3 className="cs_author_message cs_fs_50 cs_mb_67 cs_mb_lg_50">
            {authorText}
          </h3>
        )}

        <div className="cs_author_meta">
          {authorSignUrl && (
            <img src={authorSignUrl} alt="Signature" className="cs_mb_10" />
          )}
          {authorDesignation && (
            <p className="cs_author_name mb-0">
              <span>{authorDesignation}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
