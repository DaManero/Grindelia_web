import { Link } from "react-router-dom";
import ButtonStyle2 from "../Button/ButtonStyle2";
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
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Nav
                  setMobileToggle={setMobileToggle}
                  mobileToggle={mobileToggle}
                />
              </div>
            </div>
            <a
              href="https://wa.me/549XXXXXXXXXX" // Reemplaza por el número real
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#5F7260",
                color: "#fff",
                borderRadius: "6px",
                padding: "8px 16px",
                fontWeight: 500,
                textDecoration: "none",
                marginLeft: "68px",
                fontSize: "16px",
                transition: "background 0.2s",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: "8px" }}
              >
                <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.07.37 2.11.72 3.11a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.58 6.58l1.27-1.27a2 2 0 0 1 2.11-.45c1 .35 2 .59 3.11.72A2 2 0 0 1 22 16.92z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
