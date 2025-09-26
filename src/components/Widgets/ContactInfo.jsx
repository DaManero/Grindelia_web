import React from 'react';

export default function ContactInfo({ data }) {
  const { address, mobile, email, openingHour } = data;
  return (
    <ul className="cs_menu_widget cs_mp0">
      {address && (
        <li
          className="cs_menu_widget_address"
          dangerouslySetInnerHTML={{ __html: address }}
        />
      )}
      {mobile && (
        <li
          className="cs_white_color"
          dangerouslySetInnerHTML={{ __html: mobile }}
        />
      )}
      {email && (
        <li
          className="cs_white_color"
          dangerouslySetInnerHTML={{ __html: email }}
        />
      )}
      {openingHour && <li dangerouslySetInnerHTML={{ __html: openingHour }} />}
    </ul>
  );
}
