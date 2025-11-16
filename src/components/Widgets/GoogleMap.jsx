import React from "react";

export default function GoogleMap({ variant }) {
  return (
    <div className={variant ? variant : ""}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.1006105410497!2d-57.03102622492044!3d-37.33388590752802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b5d002a5537b1%3A0xc505b914bad3ce30!2sGrindelia!5e1!3m2!1ses!2sar!4v1763300592627!5m2!1ses!2sar"
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
