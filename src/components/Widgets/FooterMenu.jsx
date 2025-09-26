import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterMenu({ data, variant }) {
  return (
    <ul className={`cs_mp_0 ${variant}`}>
      {data?.map((item, index) => (
        <li key={index}>
          <Link to={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
