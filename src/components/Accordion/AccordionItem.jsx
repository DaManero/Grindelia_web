import React, { useState, useRef, useEffect } from 'react';

export default function AccordionItem({ title, content, isOpen, onClick }) {
  const accordionContentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (accordionContentRef.current) {
      // Measure the content's height and set it dynamically
      setContentHeight(accordionContentRef.current.offsetHeight);
    }
  }, [isOpen]);

  const accordionClass = isOpen ? 'cs_accordian active' : 'cs_accordian';
  return (
    <div className={accordionClass}>
      <div className="cs_accordian_head" onClick={onClick}>
        <h2 className="cs_accordian_title cs_fs_28 mb-0">{title}</h2>
        <span className="cs_accordian_toggle" />
      </div>
      <div
        className="cs_accordian_body_wrap"
        style={{ height: isOpen ? `${contentHeight}px` : '0' }}
      >
        <div className="cs_accordian_body" ref={accordionContentRef}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
