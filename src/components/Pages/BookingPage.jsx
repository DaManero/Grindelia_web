import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
import BookingWidget from "./BookingWidget";

export default function BookingPage() {
  pageTitle("Reservas");
  return (
    <Section
      topSpaceLg="20"
      topSpaceMd="16"
      bottomSpaceLg="20"
      bottomSpaceMd="16"
      className="container-fluid p-0"
    >
      {/* contenedor full-width */}
      <div style={{ width: "100%", boxSizing: "border-box" }}>
        {/* estilos locales: tarjeta en 2 columnas full-width (33% / 67%) */}
        <style>{`
					.booking-card {
						width: 100%;
						display: grid;
						grid-template-columns: 33% 67%;
						gap: 24px;
						background: #ffffff;
						border-radius: 0;
						box-shadow: none;
						overflow: visible;
						align-items: stretch;
						padding: 28px;
						box-sizing: border-box;
					}
					.booking-col-illustration {
						min-height: 320px;
						background-image: url('/images/Service_img_1.webp');
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
					/* responsivo: 2 columnas → 1 columna en móvil */
					@media (max-width: 991px) {
						.booking-card {
							grid-template-columns: 1fr;
							gap: 16px;
							padding: 16px;
						}
						.booking-col-illustration { min-height: 180px; border-radius: 8px; }
						.booking-title { font-size: 20px; }
					}
					.booking-card-wrap { width: 100%; max-width: 1400px; margin: 0 auto; }
				`}</style>

        <div className="booking-card-wrap">
          <div className="booking-card">
            {/* columna izquierda: imagen (33%) */}
            <div className="booking-col-illustration" aria-hidden="true" />

            {/* columna derecha: texto + widget (67%) */}
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
              {/* widget integrado dentro de la columna derecha */}
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
