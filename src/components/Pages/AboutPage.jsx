import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import AboutSection4 from "../Section/AboutSection/AboutSection4";
import Section from "../Section";
import FeatureSection6 from "../Section/FeatureSection/FeatureSection6";

import { pageTitle } from "../../helpers/PageTitle";

const aboutData = {
  title: `<span style="color:#798A74">Complejo sustentable en Las Gaviotas, frente al mar. Diseño bioclimático que minimiza el impacto ambiental, reduce consumo energético y prioriza el confort en armonía con la naturaleza.</span>`,
  subTitle: "SOBRE NOSOTROS",
  imgUrl: "/images/About_us_1.webp",
  featureList: [
    {
      title: "Construcción y diseño",
      value: "Sustentable",
    },
    {
      title: "Confort y elegancia",
      value: "2900 m2",
    },
    {
      title: "De la playa y el mar",
      value: "300 mts",
    },
  ],
};

const featureData = [
  {
    itemNumber: "01",
    title: "Belleza inigualable",
    subTitle:
      "Ubicado en un entorno pintoresco, Grindelia ofrece vistas relajantes, un parque de 1500mts para múltiples actividades, a solo 300 metros de la playa, y 10 minutos a pie de del centro de mar de las pampas, brindando a los huéspedes una estadía cómoda, serena y revitalizante.",
  },
  {
    itemNumber: "02",
    title: "Alojamientos de lujo",
    subTitle:
      "Nuestro resort cuenta con habitaciones y suites premium equipadas con la última tecnología y los mejores materiales diseñadas meticulosamente para ofrecer confort, estilo y practicidad en todas las épocas del año.",
  },
  {
    itemNumber: "03",
    title: "Amenities Premium",
    subTitle:
      "Grindelia ofrece variedad de amenidades para cada huésped y su familia, incluyendo spa, gimnasio completo, piscina in-out, SUM, espacio de co-working, quincho para eventos, kids club+parque aéreo y propuestas deportivas, garantizando una experiencia integral.",
  },
  {
    itemNumber: "04",
    title: "Servicio impecable",
    subTitle:
      "Nuestro personal dedicado está comprometido a brindar un servicio personalizado y asegurar que cada aspecto de tu estadía supere las expectativas, desde el check-in hasta el check-out.",
  },
  {
    itemNumber: "05",
    title: "Compromiso ambiental",
    subTitle:
      "Grindelia está comprometido con la sustentabilidad, implementando prácticas ecológicas y tecnologías eficientes para minimizar el impacto ambiental y preservar la belleza natural de Las Gaviotas.",
  },
  {
    itemNumber: "06",
    title: "Valor excepcional",
    subTitle:
      "Ofrecemos una propuesta de valor que combina calidad, diseño y sostenibilidad, entregando experiencias memorables y una inversión en bienestar a largo plazo.",
  },
];

const datanew = [
  {
    subTitle: `Somos un equipo comprometido con crear espacios que respetan y abrazan la naturaleza de Las Gaviotas. Nuestro proyecto nace de la convicción de
que es posible vivir con confort y elegancia sin comprometer el medio ambiente.
Por eso, diseñamos edificios sustentables que aprovechan inteligentemente cada
recurso: desde la recolección de agua de lluvia hasta el uso de energía solar,
implementando tecnologías como piso radiante, aerotermia y construcción en seco
Steel Framing que minimiza la huella de carbono.
Creemos que el verdadero lujo está en despertar con vistas al verde, disfrutar
de espacios luminosos con ventilación natural, y saber que tu hogar genera su
propia energía. Cada decisión, desde la orientación del edificio hasta la
elección de materiales de bajo mantenimiento, está pensada para ofrecerte
calidad de vida a largo plazo con el menor impacto ambiental posible. No solo
construimos departamentos; creamos un estilo de vida consciente donde el bienestar
personal y el cuidado del entorno van de la mano.`,
  },
];

export default function AboutPage() {
  pageTitle("Sobre Nosotros");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);

  // seguridad: obtener el texto de datanew de forma segura
  const aboutText = (() => {
    try {
      const raw =
        datanew && datanew[0] && datanew[0].subTitle ? datanew[0].subTitle : "";
      // normalizar saltos de línea y recortar
      return String(raw).replace(/\r\n/g, "\n").replace(/\n+/g, " ").trim();
    } catch (e) {
      console.error("AboutPage: error al obtener aboutText", e);
      return "";
    }
  })();

  // Parallax suave (similar al de HomePage)
  useEffect(() => {
    const el = document.querySelector(".about_parallax");
    if (!el) return;
    const startTop =
      el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const rel = y - startTop;
      const maxShift = el.offsetHeight * 0.15;
      const shift = Math.max(-maxShift, Math.min(rel * 0.12, maxShift));
      el.style.backgroundPosition = `center calc(50% + ${shift}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Estilos locales: oscurecer textos grises solo en AboutPage */}
      <style>{`
        .about-page p,
        .about-page .cs_text,
        .about-page .cs_list li,
        .about-page .cs_section_subtitle,
        .about-page .cs_feature_text,
        .about-page .cs_muted,
        .about-page .cs_gray {
          color: #4b4b49;
        }
        /* Eliminar espaciadores globales dentro de AboutPage */
        .about-page .cs_height_lg_150,
        .about-page .cs_height_md_80 {
          display: none !important;
          height: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
      <div className="about-page">
        <PageHeadingSection
          title=""
          bgImgUrl="/images/Page_heading_bg_about.jpg"
        />
        <Section
          topSpaceLg="10"
          topSpaceMd="75"
          bottomSpaceLg="150"
          bottomSpaceMd="80"
          className="cs_gray_bg"
        >
          <AboutSection4 data={aboutData} />
        </Section>

        {/* Parallax full width (arriba de "Nuestro compromiso") */}
        <div className="about_parallax_wrap">
          <div
            className="about_parallax"
            role="img"
            aria-label="Grindelia - Apart Hotel & Spa sustentable"
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL || "/"
              }images/about_parallax_2400.jpg)`,
            }}
          >
            <div className="about_parallax_overlay" />
          </div>
        </div>
        <style>{`
          .about_parallax_wrap { width: 100%; }
          .about_parallax {
            position: relative;
            width: 100vw;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            height: 58vh;
            min-height: 420px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 120% auto; /* zoom para evitar franjas */
            background-attachment: fixed;
          }
          .about_parallax_overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.38) 100%);
            pointer-events: none;
          }
          @media (max-width: 991px) {
            .about_parallax {
              height: 48vh;
              min-height: 300px;
              background-attachment: scroll; /* evita saltos en mobile */
              background-size: 130% auto;    /* más zoom en mobile */
            }
          }
        `}</style>

        {/* Sección nueva: texto extendido sobre Nosotros (desde datanew) */}
        <Section
          topSpaceLg="60"
          topSpaceMd="40"
          bottomSpaceLg="60"
          bottomSpaceMd="40"
          className="cs_custom_bg"
        >
          {/* estilos locales: texto izquierda (55%) + imagen derecha (45%) */}
          <style>{`
            .about-row {
              max-width: 1200px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 55% 45%;
              gap: 28px;
              align-items: stretch;
              box-sizing: border-box;
            }
            .about-left { display: block; }
            .about-left img {
              width: 100%;
              height: 100%;
              display: block;
              border-radius: 12px;
              box-shadow: 0 10px 30px rgba(46,47,43,0.06);
              object-fit: cover;
            }
            .about-right {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              padding: 6px 0;
            }
            .about-right .section-heading { margin: 0 0 12px 0; }
            .about-right .cs_text {
              font-size: 15px;
              color: #4b4b49;
              line-height: 1.8;
            }
            .about-right .cs_text p { margin: 0 0 1rem; hyphens: auto; }
            @media (max-width: 900px) {
              .about-row { grid-template-columns: 1fr; gap: 18px; }
              .about-left img { min-height: 180px; border-radius: 10px; height: auto; }
            }
          `}</style>

          <div className="container">
            <div className="about-row">
              {/* Texto a la izquierda */}
              <div className="about-right">
                <div className="section-heading">
                  <h3 className="cs_fs_38">Nuestro compromiso</h3>
                </div>
                <div className="cs_text">
                  <p className="cs_mb_12">{aboutText}</p>
                </div>
              </div>
              {/* Imagen a la derecha */}
              <div className="about-left">
                <img
                  src="/images/About_us_1.webp"
                  alt="Nuestro compromiso - Grindelia"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Propuesta integral Grindelia (mismo diseño que "Nuestro compromiso" pero invertido) */}
        <Section
          topSpaceLg="40"
          topSpaceMd="40"
          bottomSpaceLg="80"
          bottomSpaceMd="60"
        >
          <style>{`
            .proposal-row {
              max-width: 1200px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 45% 55%; /* imagen izq 45% / texto der 55% */
              gap: 28px;
              align-items: stretch;
              box-sizing: border-box;
            }
            .proposal-left { display: flex; align-items: stretch; }
            .proposal-right { display: flex; flex-direction: column; justify-content: flex-start; padding: 6px 0; }
            .proposal-left img {
              width: 100%;
              height: 100%;          /* iguala alto al del texto */
              display: block;
              flex: 1 1 auto;        /* asegura ocupar todo el alto disponible */
              border-radius: 12px;
              box-shadow: 0 10px 30px rgba(46,47,43,0.06);
              object-fit: cover;
            }
            .proposal-right .section-heading { margin: 0 0 12px 0; }
            .proposal-right .cs_text {
              font-size: 15px;
              color: #4b4b49;
              line-height: 1.8;
            }
            .proposal-right .cs_text p { margin: 0 0 1rem; hyphens: auto; }
            @media (max-width: 900px) {
              .proposal-row { grid-template-columns: 1fr; gap: 18px; }
              .proposal-left img { min-height: 180px; border-radius: 10px; height: auto; } /* en mobile, altura automática */
            }
          `}</style>
          <div className="container">
            <div className="proposal-row">
              {/* Imagen a la izquierda */}
              <div className="proposal-left">
                <img
                  src="/images/Feature_img_1.jpg"
                  alt="Propuesta integral - Grindelia"
                />
              </div>
              {/* Texto a la derecha */}
              <div className="proposal-right">
                <div className="section-heading">
                  <h3 className="cs_fs_38">Propuesta integral Grindelia</h3>
                </div>
                <div className="cs_text">
                  <p>
                    Un apart completo con calefacción central e individual
                    (estufas Tromen), pensado para todas las estaciones. A esto
                    se suma una propuesta de amenities única en la zona:
                    desayuno en la habitación, pileta in/out con jacuzzi, spa
                    con sauna y masajes, gimnasio y espacios para el juego y el
                    deporte.
                  </p>
                  <p>
                    También contamos con cancha de pádel y vóley, Kids Club y
                    juegos en altura, SUM, quincho y fogón, área de co‑working y
                    entretenimiento (pool, ping pong, TV 85” 8K).
                    Estacionamiento propio con seguridad 24 hs, bicicletas y
                    juegos de playa incluidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          topSpaceLg="20"
          topSpaceMd="75"
          bottomSpaceLg="140"
          bottomSpaceMd="75"
        >
          <FeatureSection6
            sectionTitle="Descubrí el lujo y el confort en un entorno natural"
            sectionSubTitle="Por qué elegir Grindelia"
            data={featureData}
          />
        </Section>
      </div>
    </>
  );
}
