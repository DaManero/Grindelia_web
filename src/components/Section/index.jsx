import React from 'react';
import Spacing from '../Spacing';

export default function Section({
  topSpaceLg = '_',
  topSpaceMd = '_',
  bottomSpaceLg = '_',
  bottomSpaceMd = '_',
  className,
  id = '',
  children,
  ...props
}) {
  return (
    <section
      className={`cs_bg_filed ${className ? className : ''}`}
      id={id}
      {...props}
    >
      <Spacing lg={topSpaceLg} md={topSpaceMd} />
      {children}
      <Spacing lg={bottomSpaceLg} md={bottomSpaceMd} />
    </section>
  );
}
