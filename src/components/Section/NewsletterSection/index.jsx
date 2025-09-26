import React from 'react';
import Newsletter from '../../Newsletter';

export default function NewsletterSection({ title, variant }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1">
          <Newsletter variant={`text-center ${variant}`} title={title} icon />
        </div>
      </div>
    </div>
  );
}
