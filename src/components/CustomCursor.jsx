import React, { useEffect } from 'react';

export default function CustomCursor({ children, text, imgUrl, variant }) {
  useEffect(() => {
    // Select all elements with the class 'cs_custom_pointer_wrap'
    document
      .querySelectorAll('.cs_custom_pointer_wrap')
      .forEach(function (element) {
        // Add an event listener for the 'mousemove' event
        element.addEventListener('mousemove', function (e) {
          // Calculate mouseX and mouseY relative to the element
          let mouseX = e.pageX - element.offsetLeft;
          let mouseY = e.pageY - element.offsetTop;

          // Find the element with the class 'cs_mouse_point' within the current element
          let mousePoint = element.querySelector('.cs_mouse_point');
          if (mousePoint) {
            // Set the CSS properties for top and left
            mousePoint.style.top = mouseY + 'px';
            mousePoint.style.left = mouseX + 'px';
          }
        });
      });
  }, []);
  return (
    <div className="cs_custom_pointer_wrap">
      {children}
      <span className={`cs_mouse_point ${variant ? variant : ''}`}>
        {imgUrl ? <img src={imgUrl} alt="Thumb" /> : text}
      </span>
    </div>
  );
}
