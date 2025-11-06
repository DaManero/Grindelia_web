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
      </ul>
    </nav>
  );
}
