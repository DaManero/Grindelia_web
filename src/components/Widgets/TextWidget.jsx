import React from 'react';

export default function TextWidget({ logoUrl, text }) {
  return (
    <div className="cs_text_widget">
      {logoUrl && <img src={logoUrl} alt="Logo" />}
      {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
    </div>
  );
}
