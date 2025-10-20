import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";

export default function Header({ logoUrl, variant, fullWidth }) {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <header
      className={`cs_site_header cs_style_1 cs_primary_color cs_sticky_header ${
        variant ? variant : ""
      }`}
    >
      <div className="cs_main_header">
        <div className={fullWidth ? "container-fluid" : "container"}>
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" to="/">
                <img
                  src="/images/Logo_bco.png"
                  alt="Logo"
                  style={{ height: "56px", width: "auto", marginLeft: "0" }}
                />
              </Link>
            </div>
            <div
              className="cs_main_header_center"
              style={{
                justifyContent: "flex-end",
                display: "flex",
                width: "100%",
              }}
            >
              <div className="cs_nav_wrapper">
                <Nav
                  setMobileToggle={setMobileToggle}
                  mobileToggle={mobileToggle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
