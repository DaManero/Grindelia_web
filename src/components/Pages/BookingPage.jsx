import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
import BookingWidget from "./BookingWidget";
import { useEffect } from "react";

export default function BookingPage({ standalone = true }) {
  // Evita setear título si se usa embebido
  if (standalone) {
    pageTitle("Reservas");
  }

  // Si ya hay una tarjeta booking-card en la página (render previo), no renderizar de nuevo
  const alreadyMounted =
    typeof window !== "undefined" && document.querySelector(".booking-card");

  if (alreadyMounted) return null;

  // Inyectar estilos sólo una vez (si no existen)
  if (
    typeof window !== "undefined" &&
    !document.getElementById("booking-page-styles")
  ) {
    const style = document.createElement("style");
    style.id = "booking-page-styles";
    style.textContent = `
      .booking-card {
        width: 100%;
        display: grid;
        grid-template-columns: 33% 67%;
        gap: 24px;
        background: #f5f4f1;
        border-radius: 0;
        box-shadow: none;
        overflow: visible;
        align-items: stretch;
        padding: 28px;
        box-sizing: border-box;
      }
      .booking-col-illustration {
        min-height: 320px;
        background-image: url('/images/About_us_1.webp');
        background-size: cover;
        background-position: center;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(46,47,43,0.06);
      }
      .booking-col-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 6px 12px;
      }
      .booking-subtitle {
        color: #798a74;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 12px;
        margin-bottom: 8px;
      }
      .booking-title {
        font-size: 24px;
        margin: 0 0 10px 0;
        color: #2e2f2b;
        line-height: 1.15;
      }
      .booking-desc {
        color: #6b6b68;
        margin-bottom: 14px;
        line-height: 1.6;
        font-size: 14px;
      }
      .booking-divider {
        width: 110px;
        height: 3px;
        border-radius: 2px;
        background: linear-gradient(90deg,#C5A46D 0%, #F5F4F1 100%);
        margin: 12px 0 18px 0;
        box-shadow: 0 6px 14px rgba(197,164,109,0.07);
      }
      .booking-widget-area {
        padding: 6px 0 0 0;
      }
      @media (max-width: 991px) {
        .booking-card {
          grid-template-columns: 1fr;
          gap: 16px;
          padding: 16px;
        }
        .booking-col-illustration {
          min-height: 180px;
          border-radius: 8px;
        }
        .booking-title {
          font-size: 20px;
        }
      }
      .booking-card-wrap {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
      }
    `;
    document.head.appendChild(style);
  }

  // Limpieza de duplicados (contenedor o iframes fuera de la tarjeta principal)
  useEffect(() => {
    try {
      const card = document.querySelector(".booking-card");
      if (!card) return;
      const mainContainer = card.querySelector("#octorate-booking-widget-page");
      // Eliminar otros contenedores con el mismo id fuera de la tarjeta
      const allContainers = Array.from(
        document.querySelectorAll("#octorate-booking-widget-page")
      );
      allContainers.forEach((el) => {
        if (el !== mainContainer && !card.contains(el)) {
          el.remove();
        }
      });
      // Eliminar iframes fallback del widget fuera de la tarjeta
      const strayIframes = Array.from(
        document.querySelectorAll('iframe[src*="booking-widget"]')
      );
      strayIframes.forEach((ifr) => {
        if (!card.contains(ifr)) ifr.remove();
      });
    } catch (err) {
      // silencioso
      console.debug("BookingPage dedupe error", err);
    }
  }, []);

  return (
    <Section
      topSpaceLg="20"
      topSpaceMd="16"
      bottomSpaceLg="20"
      bottomSpaceMd="16"
      className="container-fluid p-0"
    >
      <div style={{ width: "100%", boxSizing: "border-box" }}>
        <div className="booking-card-wrap">
          <div className="booking-card">
            <div className="booking-col-illustration" aria-hidden="true" />
            <div className="booking-col-right">
              <span className="booking-subtitle">
                RESERVAS &amp; DISPONIBILIDAD
              </span>
              <h2 className="booking-title">Reservá fácil y rápido</h2>
              <p className="booking-desc">
                Ingresá fechas y ocupación para consultar disponibilidad y
                tarifas. Nuestro sistema responde en tiempo real y te mostrará
                las opciones disponibles.
              </p>
              <div className="booking-divider" />
              <div className="booking-widget-area" aria-live="polite">
                <BookingWidget containerId="octorate-booking-widget-page" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
