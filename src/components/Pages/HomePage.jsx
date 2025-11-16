import { useEffect } from "react";
import HeroSection from "../Section/HeroSection";
import Section from "../Section";
import AboutSection from "../Section/AboutSection";

import FacilitySection from "../Section/FacilitySection";
import TestimonialSection from "../Section/TestimonialSection";
import ServiceSection from "../Section/ServiceSection";
import GallerySection from "../Section/GallerySection";
import { pageTitle } from "../../helpers/PageTitle";
import BookingPage from "./BookingPage"; // asegurarse de usar únicamente la página completa

const heroData = [
  {
    title: "Bienvenido a nuestro<br />Eco Apart Hotel & Spa",
    subTitle: "Un oasis cerca del mar para la tranquilidad y el descanso",
    bgImgUrl: "/images/Hero_bg_1.jpg",
  },
  {
    title: "Amenities, elegancia y naturaleza <br />en cada espacio",
    subTitle: "Encontrá el equilibrio perfecto entre confort y paisajismo",
    bgImgUrl: "/images/Hero_bg_2.jpg",
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
      imgUrl: "/images/Feature_img_1.jpg",
      title: '<span style="color:#798a74">Spa &<br/>Bienestar</span>',
      subTitle:
        "Spa con solárium, masajes, ducha escocesa, sauna seco y gimnasio completo; pensado para brindar bienestar, relajación y vitalidad en un entorno exclusivo, sereno, natural y sofisticado.",
      btnText: "Ver más...",
      btnUrl: "/spa-wellness",
    },
    {
      imgUrl: "/images/Feature_img_2.jpg",
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

  return (
    <>
      <HeroSection data={heroData} />
      <BookingPage standalone={false} />
      <Section>
        <AboutSection data={aboutData} />
      </Section>

      {/* Parallax full width */}
      <div className="home_parallax_wrapper">
        <div
          className="home_parallax"
          role="img"
          aria-label="Vista destacada del Eco Apart Hotel & Spa"
        >
          <div className="home_parallax_overlay" />
        </div>
      </div>
      <style>{`
        /* Imagen recomendada (archivo principal): /images/home_parallax_2400.jpg */
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
         /* Fondo con zoom extra para cubrir al hacer parallax */
         background-image: url('${
           import.meta.env.BASE_URL
         }images/home_parallax_2400.jpg');
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

      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <FacilitySection
          sectionTitle="Explora Nuestras Exclusivas Instalaciones del Resort"
          sectionSubTitle="INSTALACIONES DE LUJO"
          data={facilityData}
        />
      </Section>
      <Section
        topSpaceLg="60"
        topSpaceMd="30"
        bottomSpaceLg="60"
        bottomSpaceMd="30"
        className="cs_testimonial_bg"
      >
        <TestimonialSection data={testimonialData} />
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
