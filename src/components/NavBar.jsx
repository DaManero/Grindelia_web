import { Link } from "react-router-dom";
import DropDown from "./Header/DropDown";

const roomPageMenu = [
  { title: "Premium 3 Ambientes", linkUrl: "/room/3a" },
  { title: "Premium 2 Ambientes", linkUrl: "/room/2a" },
];

export default function NavBar({ setMobileToggle, mobileToggle, variant }) {
  return (
    <nav className={variant ? variant : "cs_nav cs_fs_13 cs_semibold"}>
      <span
        className={
          mobileToggle ? "cs_menu_toggle cs_toggle_active" : "cs_menu_toggle"
        }
        onClick={() => setMobileToggle(!mobileToggle)}
      >
        <span></span>
      </span>

      <ul className={`cs_nav_list ${mobileToggle ? "cs_active" : ""}`}>
        <li>
          <Link to="/" className="cs_white_color">
            Inicio
          </Link>
        </li>

        <li>
          <Link to="/about" className="cs_white_color">
            Sobre Nosotros
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to="/rooms" className="cs_white_color">
            Habitaciones
          </Link>
          <DropDown>
            <ul>
              {roomPageMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.linkUrl}
                    onClick={() => setMobileToggle(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </DropDown>
        </li>

        <li>
          <Link to="/services" className="cs_white_color">
            Servicios
          </Link>
        </li>

        <li>
          <Link to="/gallery" className="cs_white_color">
            Galería
          </Link>
        </li>

        <li>
          <Link to="/contact" className="cs_white_color">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
