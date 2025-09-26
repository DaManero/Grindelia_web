import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb() {
  const [urlSegments, setUrlSegments] = useState([]);
  useEffect(() => {
    const pathSegments = window.location.pathname
      .split('/')
      .filter(segment => segment !== '');
    setUrlSegments(pathSegments);
  }, []);
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      {urlSegments.map((segment, index) => (
        <li key={index} className="breadcrumb-item">
          {index < urlSegments.length - 1 ? (
            <a href={`/${urlSegments.slice(0, index + 1).join('/')}`}>
              {segment}
            </a>
          ) : (
            <span>{segment}</span>
          )}
        </li>
      ))}
    </ol>
  );
}
