import { useEffect } from "react";

export default function FloatingWhatsApp({
  whatsappNumber = "5491123456789",
  whatsappMessage = "Hola! Quisiera consultar disponibilidad y tarifas.",
  id = "whatsapp-float-btn",
} = {}) {
  useEffect(() => {
    try {
      // evitar duplicados
      if (document.getElementById(id)) return;

      const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      const a = document.createElement("a");
      a.id = id;
      a.href = href;
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

      a.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.373 0 .01 5.373.01 12.001a11.9 11.9 0 001.64 6.06L0 24l6.07-1.61A11.9 11.9 0 0012 24c6.627 0 12-5.373 12-12 0-3.19-1.245-6.194-3.48-8.52z" fill="#fff"/>
        <path d="M17.36 14.45c-.31-.16-1.84-.9-2.12-1-.28-.11-.48-.16-.69.16-.21.31-.76 1-.93 1.2-.17.21-.34.23-.63.07-.3-.16-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.31-.02-.48.13-.64.14-.14.31-.35.47-.53.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.69-1.66-.95-2.28-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.07-.79.39-.27.32-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.21 2.09 3.2 5.07 4.49 2.98 1.3 2.98.86 3.52.81.54-.05 1.76-.72 2.01-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.21-.58-.37z" fill="#06B381"/>
      </svg>`;

      document.body.appendChild(a);

      return () => {
        const el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      };
    } catch (err) {
      // no romper la app si falla
      // eslint-disable-next-line no-console
      console.error("FloatingWhatsApp: error creando botón", err);
    }
  }, [whatsappNumber, whatsappMessage, id]);

  return null;
}
