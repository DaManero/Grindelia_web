import { useEffect } from "react";
import HeroSection from "../Section/HeroSection";
import Section from "../Section";
import AboutSection from "../Section/AboutSection";
import FacilitySection from "../Section/FacilitySection";
import FacilitySection5 from "../Section/FacilitySection/FacilitySection5";
import ServiceSection from "../Section/ServiceSection";
import GallerySection from "../Section/GallerySection";
import { pageTitle } from "../../helpers/PageTitle";
import Slider from "react-slick";

const heroData = [
  {
    title: "Bienvenido a nuestro<br />Eco Apart Hotel & Spa",
    subTitle: "Un oasis cerca del mar para la tranquilidad y el descanso",
    bgImgUrl: "/images/Hero_bg_1.webp",
  },
  {
    title: "Amenities, elegancia y naturaleza <br />en cada espacio",
    subTitle: "Encontrá el equilibrio perfecto entre confort y paisajismo",
    bgImgUrl: "/images/Hero_bg_2.webp",
  },
  {
    title: "Vive la sustentabilidad<br />con estilo y confort",
    subTitle: "Diseño bioclimático y amenities pensados para tu bienestar",
    bgImgUrl: "/images/Hero_bg_3.webp",
  },
];

const aboutData = {
  title:
    "Eco Apart Hotel & Spa Premium, diseñado con tecnologías sustentables que reducen el impacto ambiental, fusionando confort, naturaleza y elegancia en un entorno responsable y armónico.",
  subTitle: "Porqué elegirnos",
  imgUrl: "/images/icons/cta_icon_1.svg",
  btnText: "Leer más",
  btnUrl: "/about",
};

// NUEVO: Datos de Diferenciales para FacilitySection5
const diferencialesData = [
  {
    title: "Gym Completo",
    subTitle: "Equipamiento profesional de última generación",
    imgUrl: "/images/diferencial_gym.webp",
    href: "#",
  },
  {
    title: "Ascensor",
    subTitle: "Accesibilidad en todos los pisos",
    imgUrl: "/images/diferencial_ascensor.webp",
    href: "#",
  },
  {
    title: "Cancha de Pádel",
    subTitle: "Cancha profesional para disfrutar",
    imgUrl: "/images/diferencial_padel.webp",
    href: "#",
  },
  {
    title: "Beach Vóley",
    subTitle: "Cancha de arena para toda la familia",
    imgUrl: "/images/diferencial_beach.webp",
    href: "#",
  },
  {
    title: "Parque Aéreo",
    subTitle: "Juegos y diversión para los más chicos",
    imgUrl: "/images/diferencial_kids.webp",
    href: "#",
  },
  {
    title: "Pileta Climatizada",
    subTitle: "Disfrute todo el año, invierno y verano",
    imgUrl: "/images/diferencial_pileta.webp",
    href: "#",
  },
  {
    title: "Spa & Wellness",
    subTitle: "Masajes, sauna y circuitos de bienestar",
    imgUrl: "/images/diferencial_spa.webp",
    href: "#",
  },
  {
    title: "SUM & Cowork",
    subTitle: "Espacio versátil para trabajo y eventos",
    imgUrl: "/images/diferencial_cowork.webp",
    href: "#",
  },
  {
    title: "Quincho & Fogón",
    subTitle: "Eventos al aire libre con parrilla",
    imgUrl: "/images/diferencial_quincho.webp",
    href: "#",
  },
];

const roomData = [
  {
    imgUrl: "/images/room_1.jpeg",
    title: "Deluxe Room",
    currency: "$",
    price: 320,
    pricePer: "/Night",
    href: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_2.jpeg",
    title: "Standard Room",
    currency: "$",
    price: 450,
    pricePer: "/Night",
    href: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_3.jpeg",
    title: "Superior Room",
    currency: "$",
    price: 520,
    pricePer: "/Night",
    href: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_2.jpeg",
    title: "Standard Room",
    currency: "$",
    price: 450,
    pricePer: "/Night",
    href: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
];

const facilityData = [
  ...[
    {
      imgUrl: "/images/Feature_img_3.webp",
      title: '<span style="color:#798a74">Espacio de usos<br/>múltiples</span>',
      subTitle:
        "Salón versátil para trabajo y esparcimiento: coworking, salas de reunión y áreas de relax, diseñado para combinar productividad, creatividad y ocio en un mismo ambiente confortable.",
      btnText: "Ver más...",
      btnUrl: "/cowork",
    },
    {
      imgUrl: "/images/Feature_img_1.webp",
      title: '<span style="color:#798a74">Spa &<br/>Bienestar</span>',
      subTitle:
        "Spa con solárium, masajes, ducha escocesa, sauna seco y gimnasio completo; pensado para brindar bienestar, relajación y vitalidad en un entorno exclusivo, sereno, natural y sofisticado.",
      btnText: "Ver más...",
      btnUrl: "/spa-wellness",
    },
    {
      imgUrl: "/images/Feature_img_2a.webp",
      title: '<span style="color:#798a74">Pileta, Quincho<br/>y Paddle</span>',
      subTitle:
        "Pileta climatizada todo el año, quincho para 30 personas y cancha de paddle, con equipamiento para eventos, actividades y celebraciones en un entorno seguro y agradable.",
      btnText: "Ver más...",
      btnUrl: "/pileta",
    },
  ].map((item) => ({
    ...item,
    imgStyle: {
      position: "relative",
      filter: "contrast(1.15) brightness(1.08) saturate(1.12)",
      boxShadow: "0 8px 32px rgba(197,164,109,0.25)",
      borderRadius: "18px",
      overflow: "hidden",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(120deg, rgba(197,164,109,0.18) 0%, rgba(245,244,241,0.08) 100%)",
      pointerEvents: "none",
      borderRadius: "18px",
    },
  })),
];

const testimonialData = [
  {
    avatarName: "María González",
    avatarDesignation: "Familia huésped",
    avatarText:
      "La atención fue excelente y las instalaciones impecables. Mis hijos disfrutaron mucho la pileta climatizada y el spa fue un verdadero descanso para nosotros. ¡Volveremos!",
    avatarReview: 5,
  },
  {
    avatarName: "Javier López",
    avatarDesignation: "Turista",
    avatarText:
      "El desayuno buffet es increíble y la vista al mar desde la habitación es inolvidable. Todo el personal fue muy amable y atento en cada detalle.",
    avatarReview: 4.5,
  },
  {
    avatarName: "Sofía Martínez",
    avatarDesignation: "Huésped ejecutiva",
    avatarText:
      "Ideal para viajes de trabajo y relax. El espacio de coworking es cómodo y silencioso, y el gimnasio está muy bien equipado. ¡Recomiendo el hotel para negocios y placer!",
    avatarReview: 5,
  },
];

const serviceData = {
  imgUrl1: "/images/Service_img_1.webp",
  imgStyle1: {
    position: "relative",
    filter: "contrast(1.15) brightness(1.08) saturate(1.12)",
    boxShadow: "0 8px 32px rgba(197,164,109,0.25)",
    borderRadius: "18px",
    overflow: "hidden",
  },
  imgUrl2: "/images/Service_img_2.webp",
  imgStyle2: {
    position: "relative",
    filter: "contrast(1.15) brightness(1.08) saturate(1.12)",
    boxShadow: "0 8px 32px rgba(197,164,109,0.25)",
    borderRadius: "18px",
    overflow: "hidden",
  },
  title: "Apart Hotel & Spa sustentable, lujo y confort responsable.",
  subTitle: "APART ECOLÓGICO",
  features: [
    "Paneles solares",
    "Recuperación de agua",
    "Separación de residuos",
    "Conservación de la biodiversidad",
  ],
  btnText: "Ver servicios...",
  btnUrl: "/services",
};

const galleryData = [
  { imgUrl: "/images/Gallery_1.webp", title: "Pileta" },
  { imgUrl: "/images/Gallery_2.webp", title: "Niños" },
  { imgUrl: "/images/Gallery_3.webp", title: "Modo Relax" },
  { imgUrl: "/images/Gallery_4.webp", title: "Modo Work" },
];

const blogData = [
  {
    imgUrl: "/images/post_thumb_1.jpeg",
    postedBy: "Jenifar",
    date: "3 Aug 2025",
    title: "A Journey into Our Luxurious Resort",
    btnText: "Ver más...",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_2.jpeg",
    postedBy: "Jenifar",
    date: "2 Aug 2025",
    title: "Exquisite Dining Experiences at Our Resort",
    btnText: "Ver más...",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_3.jpeg",
    postedBy: "Jenifar",
    date: "20 July 2025",
    title: "Rejuvenation Secrets from Our Spa",
    btnText: "Ver más...",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_2.jpeg",
    postedBy: "Jenifar",
    date: "2 Aug 2025",
    title: "Exquisite Dining Experiences at Our Resort",
    btnText: "Ver más...",
    btnUrl: "/blog/blog-details",
  },
];

export default function HomePage() {
  pageTitle("Inicio");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);

  // Parallax suave (JS fallback para móviles que no soportan background-attachment: fixed)
  useEffect(() => {
    const el = document.querySelector(".home_parallax");
    if (!el) return;
    const startTop =
      el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const rel = y - startTop; // desplazamiento relativo del bloque
      const maxShift = el.offsetHeight * 0.15; // límite en px (15% de la altura)
      const shift = Math.max(-maxShift, Math.min(rel * 0.12, maxShift)); // factor suave 0.12
      el.style.backgroundPosition = `center calc(50% + ${shift}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Configuración del carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Section>
        <AboutSection data={aboutData} />
      </Section>

      {/* NUEVA SECCIÓN: Diferenciales con FacilitySection5 */}
      <Section
        topSpaceLg="100"
        topSpaceMd="60"
        bottomSpaceLg="100"
        bottomSpaceMd="60"
        className="cs_diferenciales_section"
      >
        <FacilitySection5
          sectionTitle="Diferenciales de Grindelia"
          sectionSubTitle="LO QUE NOS HACE ÚNICOS"
          data={diferencialesData}
          sectionTitleClass="diferencial-title-white"
        />
      </Section>

      <style>{`
        /* Background verde para sección Diferenciales */
        .cs_diferenciales_section {
          background: #798a74;
          position: relative;
        }
        
        .cs_diferenciales_section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
        }
        
        .cs_diferenciales_section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
        }

        /* Estilos para títulos blancos */
        .cs_diferenciales_section .cs_section_heading h3 {
          color: #C5A46D !important;
        }

        .cs_diferenciales_section .cs_section_heading h2,
        .diferencial-title-white {
          color: white !important;
        }

        /* Ocultar overlay de texto al hover - FacilitySliderStyle2 */
        .cs_diferenciales_section .cs_card_overlay,
        .cs_diferenciales_section .slick-slide .cs_card_overlay {
          transition: opacity 0.4s ease !important;
          opacity: 1 !important;
        }

        .cs_diferenciales_section .cs_card:hover .cs_card_overlay,
        .cs_diferenciales_section .slick-slide:hover .cs_card_overlay {
          opacity: 0 !important;
        }

        /* Ocultar textos h3 y p al hover */
        .cs_diferenciales_section .cs_card h3,
        .cs_diferenciales_section .cs_card p {
          transition: opacity 0.4s ease !important;
        }

        .cs_diferenciales_section .cs_card:hover h3,
        .cs_diferenciales_section .cs_card:hover p {
          opacity: 0 !important;
        }

        /* Zoom en imagen */
        .cs_diferenciales_section .cs_card img {
          transition: transform 0.6s ease !important;
        }

        .cs_diferenciales_section .cs_card:hover img {
          transform: scale(1.08) !important;
        }

        /* Border radius */
        .cs_diferenciales_section .cs_card {
          border-radius: 12px;
          overflow: hidden;
        }
      `}</style>

      {/* Parallax full width */}
      <div className="home_parallax_wrapper">
        <div
          className="home_parallax"
          role="img"
          aria-label="Vista destacada del Eco Apart Hotel & Spa"
          style={{
            backgroundImage: `url(${
              import.meta.env.BASE_URL
            }images/home_parallax_2400.webp)`,
          }}
        >
          <div className="home_parallax_overlay" />
        </div>
      </div>
      <style>{`
        /* Parallax Home:
           - Nombre: /images/home_parallax_2400.webp
           - Tamaño recomendado: 2400x1350 px (16:9)
           - Mínimo aceptable: 1920x1080 px
           - Opcional: variantes 1920, 1280, 960, 640 y .webp */
        .home_parallax_wrapper { width: 100%; }
        .home_parallax {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          height: 62vh;
          min-height: 440px;
         /* Fondo con zoom extra para cubrir al hacer parallax (imagen seteada inline) */
          background-repeat: no-repeat;
          background-position: center;
          background-size: 120% auto; /* zoom para evitar franjas vacías */
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .home_parallax_overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.45) 100%);
          pointer-events: none;
        }
        @media (max-width: 991px) {
          .home_parallax {
            height: 50vh;
            min-height: 320px;
            background-attachment: scroll; /* evita saltos en móviles */
           background-size: 130% auto;   /* más zoom en mobile para cubrir */
          }
        }
      `}</style>

      <Section>
        <FacilitySection
          sectionTitle="Explora Nuestras Exclusivas Instalaciones del Resort"
          sectionSubTitle="INSTALACIONES DE LUJO"
          data={facilityData}
        />
      </Section>

      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <ServiceSection data={serviceData} />
      </Section>

      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <GallerySection
          sectionTitle="Explora experiencias inolvidables"
          sectionSubTitle="GALERÍA DESTACADA"
          data={galleryData}
        />
      </Section>
    </>
  );
}
