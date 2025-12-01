import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";

const roomPageMenu = [
  { title: "Premium 2 Ambientes", linkUrl: "/room/2a" },
  { title: "Premium 3 Ambientes", linkUrl: "/room/3a" },
];

export default function NavBar({ setMobileToggle, mobileToggle, variant }) {
  const location = useLocation();

  const handleHomeClick = (e) => {
    try {
      // Si ya estamos en home, forzar reload completo
      if (location.pathname === "/" || location.pathname === "") {
        e.preventDefault();
        window.location.href = "/";
        return;
      }
      // Cerrar menú mobile si está abierto
      if (mobileToggle && typeof setMobileToggle === "function") {
        setMobileToggle(false);
      }
    } catch (err) {
      // prevenir que un error rompa la navegación
      console.error("NavBar handleHomeClick error:", err);
    }
  };

  return (
    <>
      <style>{`
        /* Botón Reservar minimalista en mobile */
        .cs_mobile_booking_item {
          display: none;
        }
        
        @media (max-width: 991px) {
          .cs_mobile_booking_item {
            display: block;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.15);
          }
          
          .cs_mobile_booking_link {
            position: relative;
            display: block;
            padding: 18px 24px !important;
            background: transparent;
            color: white !important;
            border: 2px solid white;
            text-align: center;
            border-radius: 10px;
            font-weight: 700;
            font-size: 17px;
            letter-spacing: 0.5px;
            text-decoration: none !important;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          
          .cs_mobile_booking_link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: #798a74;
            transition: left 0.3s ease;
            z-index: -1;
          }
          
          .cs_mobile_booking_link:active {
            color: white !important;
            border-color: #798a74;
            transform: scale(0.98);
          }
          
          .cs_mobile_booking_link:active::before {
            left: 0;
          }
        }
      `}</style>

      <nav className={variant ? variant : "cs_nav cs_fs_13 cs_semibold"}>
        <span
          className={
            mobileToggle ? "cs_menu_toggle cs_toggle_active" : "cs_menu_toggle"
          }
          onClick={() => {
            if (typeof setMobileToggle === "function")
              setMobileToggle(!mobileToggle);
          }}
        >
          <span></span>
        </span>

        <ul className={`cs_nav_list ${mobileToggle ? "cs_active" : ""}`}>
          <li>
            <Link to="/" className="cs_white_color" onClick={handleHomeClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="cs_white_color"
              onClick={() => {
                if (mobileToggle && typeof setMobileToggle === "function") {
                  setMobileToggle(false);
                }
              }}
            >
              Sobre Nosotros
            </Link>
          </li>
          <li className="menu-item-has-children">
            <Link
              to="/rooms"
              className="cs_white_color"
              onClick={() => {
                if (mobileToggle && typeof setMobileToggle === "function") {
                  setMobileToggle(false);
                }
              }}
            >
              Habitaciones
            </Link>
            <DropDown>
              <ul>
                {roomPageMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.linkUrl}
                      onClick={() => {
                        if (typeof setMobileToggle === "function") {
                          setMobileToggle(false);
                        }
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </DropDown>
          </li>
          <li>
            <Link
              to="/services"
              className="cs_white_color"
              onClick={() => {
                if (mobileToggle && typeof setMobileToggle === "function") {
                  setMobileToggle(false);
                }
              }}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="cs_white_color"
              onClick={() => {
                if (mobileToggle && typeof setMobileToggle === "function") {
                  setMobileToggle(false);
                }
              }}
            >
              Galería
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="cs_white_color"
              onClick={() => {
                if (mobileToggle && typeof setMobileToggle === "function") {
                  setMobileToggle(false);
                }
              }}
            >
              Contacto
            </Link>
          </li>
          {/* Botón Reservar solo visible en mobile */}
          <li className="cs_mobile_booking_item">
            <a
              href="https://book.octorate.com/octobook/site/reservation/index.xhtml?siteKey=8e3ffa8acec77e1b7347357712d940a3"
              target="_blank"
              rel="noopener noreferrer"
              className="cs_mobile_booking_link"
              onClick={() => {
                if (typeof setMobileToggle === "function") {
                  setMobileToggle(false);
                }
              }}
            >
              RESERVAR AHORA
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
