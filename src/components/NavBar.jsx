import { Link } from "react-router-dom";
import { useEffect } from "react";
import DropDown from "./Header/DropDown";

const roomPageMenu = [
  { title: "Premium 3 Ambientes", linkUrl: "/room/3a" },
  { title: "Premium 2 Ambientes", linkUrl: "/room/2a" },
];

export default function NavBar({ setMobileToggle, mobileToggle, variant }) {
  // Número del hotel (ejemplo ARG con código país 54). Reemplazá por el real sin "+" ni espacios.
  const whatsappNumber = "5491123456789";
  const whatsappMessage = "Hola! Quisiera consultar disponibilidad y tarifas.";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  useEffect(() => {
    // Crear botón flotante en body para que siempre sea visible
    try {
      // evitar duplicados si ya fue creado
      if (document.getElementById("whatsapp-float-btn")) return;

      const a = document.createElement("a");
      a.id = "whatsapp-float-btn";
      a.href = whatsappHref;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", "Contactar por WhatsApp");
      Object.assign(a.style, {
        position: "fixed",
        right: "18px",
        bottom: "18px",
        zIndex: 99999,
        background: "#25D366",
        color: "#fff",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 20px rgba(37,211,102,0.18)",
        textDecoration: "none",
      });

      // SVG icon
      a.innerHTML = `
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.373 0 .01 5.373.01 12.001a11.9 11.9 0 001.64 6.06L0 24l6.07-1.61A11.9 11.9 0 0012 24c6.627 0 12-5.373 12-12 0-3.19-1.245-6.194-3.48-8.52z" fill="#fff"/>
          <path d="M17.36 14.45c-.31-.16-1.84-.9-2.12-1-.28-.11-.48-.16-.69.16-.21.31-.76 1-.93 1.2-.17.21-.34.23-.63.07-.3-.16-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.31-.02-.48.13-.64.14-.14.31-.35.47-.53.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.69-1.66-.95-2.28-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.07-.79.39-.27.32-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.21 2.09 3.2 5.07 4.49 2.98 1.3 2.98.86 3.52.81.54-.05 1.76-.72 2.01-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.21-.58-.37z" fill="#06B381"/>
        </svg>
      `;

      document.body.appendChild(a);

      return () => {
        const el = document.getElementById("whatsapp-float-btn");
        if (el && el.parentNode) el.parentNode.removeChild(el);
      };
    } catch (err) {
      // si algo falla no romper la app
      console.error("NavBar: error creando botón WhatsApp", err);
    }
  }, [whatsappHref]);

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
                    onClick={() => {
                      if (typeof setMobileToggle === "function")
                        setMobileToggle(false);
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
              if (typeof setMobileToggle === "function") setMobileToggle(false);
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
              if (typeof setMobileToggle === "function") setMobileToggle(false);
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
              if (typeof setMobileToggle === "function") setMobileToggle(false);
            }}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
