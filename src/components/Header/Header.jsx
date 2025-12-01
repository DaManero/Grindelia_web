import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

export default function Header({ logoUrl, variant, fullWidth }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* Header fijo con fondo transparente */
        .cs_site_header {
          position: fixed !important;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent !important;
          backdrop-filter: blur(0px);
          transition: all 0.4s ease;
        }
        
        /* Cuando hace scroll, fondo oscuro con blur */
        .cs_sticky_active {
          background: rgba(0, 0, 0, 0.85) !important;
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        /* Compensar espacio del header fijo */
        body {
          padding-top: 0;
        }
        
        .cs_main_header_in {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 20px !important;
          padding: 20px 0;
          transition: padding 0.3s ease;
        }
        
        .cs_sticky_active .cs_main_header_in {
          padding: 15px 0;
        }
        
        .cs_main_header_left {
          flex: 0 0 auto !important;
        }
        .cs_main_header_center {
          flex: 1 1 auto !important;
          display: flex !important;
          justify-content: center !important;
        }
        .cs_main_header_right {
          flex: 0 0 auto !important;
        }
        .cs_site_branding img {
          height: 56px !important;
          width: auto !important;
          display: block !important;
          transition: height 0.3s ease;
        }
        
        /* Logo más pequeño al hacer scroll */
        .cs_sticky_active .cs_site_branding img {
          height: 48px !important;
        }
        
        /* Botón Reservar blanco con hover verde */
        .cs_booking_btn {
          position: relative;
          display: inline-block;
          padding: 12px 32px;
          background: transparent;
          color: white;
          border: 2px solid white;
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.5px;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cs_booking_btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #798a74;
          transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }
        
        .cs_booking_btn:hover {
          color: white;
          border-color: #798a74;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(121, 138, 116, 0.4);
        }
        
        .cs_booking_btn:hover::before {
          left: 0;
        }
        
        .cs_booking_btn:active {
          transform: translateY(0);
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
          .cs_booking_btn {
            padding: 10px 24px;
            font-size: 15px;
          }
        }
        
        @media (max-width: 991px) {
          .cs_main_header_right {
            display: none !important;
          }
          
          .cs_site_branding img {
            height: 48px !important;
          }
          
          .cs_sticky_active .cs_site_branding img {
            height: 44px !important;
          }
          
          .cs_main_header_in {
            padding: 15px 0;
          }
          
          .cs_sticky_active .cs_main_header_in {
            padding: 12px 0;
          }
        }
      `}</style>

      <header
        className={`cs_site_header cs_style_1 cs_transparent_header ${
          isSticky ? "cs_sticky_active" : ""
        } ${mobileToggle ? "cs_mobile_toggle_active" : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src={"/images/Logo_bco.png"} alt="Logo Grindelia" />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <NavBar
                  setMobileToggle={setMobileToggle}
                  mobileToggle={mobileToggle}
                />
              </div>
              <div className="cs_main_header_right">
                <a
                  href="https://book.octorate.com/octobook/site/reservation/index.xhtml?siteKey=8e3ffa8acec77e1b7347357712d940a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_booking_btn"
                >
                  RESERVAR
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
