import React from "react";

export default function GoogleMap({ variant }) {
  return (
    <div className={variant ? variant : ""}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.4221934003172!2d-57.02853828699717!3d-37.33433513554574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b5c34a8d3f495%3A0x1694783527aea9ad!2sPunta%20del%20Este%20%26%20C.%2028%2C%20B7165%20Mar%20Azul%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1759164900595!5m2!1ses!2sar&layer=c"
        allowFullScreen=""
        style={{
          width: "100%",
          minHeight: "300px",
          background: "#fff",
          border: 0,
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="googlemap-no-filter"
      />
    </div>
  );
}
