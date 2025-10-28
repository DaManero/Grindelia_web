import { useEffect } from "react";
import HeroSection from "../Section/HeroSection";
import Section from "../Section";
import AboutSection from "../Section/AboutSection";

import VideoBlock from "../VideoBlock";
import FacilitySection from "../Section/FacilitySection";
import TestimonialSection from "../Section/TestimonialSection";
import ServiceSection from "../Section/ServiceSection";
import GallerySection from "../Section/GallerySection";
import { pageTitle } from "../../helpers/PageTitle";

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
      title: "Espacio de usos múltiples",
      subTitle:
        "Salón de usos múltiples flexible para trabajo y esparcimiento: zonas de coworking, áreas para reuniones y espacios de relax, pensado para combinar productividad y ocio en un mismo ambiente.",
      btnText: "Ver más...",
      btnUrl: "/cowork",
    },
    {
      imgUrl: "/images/Feature_img_1.webp",
      title: "Spa & Bienestar",
      subTitle:
        "Nuestro spa ofrece solárium, sala de masajes, ducha escocesa, sauna seco y gimnasio completo, brindando bienestar, relajación y vitalidad en un entorno exclusivo y sofisticado.",
      btnText: "Ver más...",
      btnUrl: "/spa-wellness",
    },
    {
      imgUrl: "/images/Feature_img_2.webp",
      title: "Pileta, Quincho y Paddle",
      subTitle:
        "Pileta climatizada todo el año; quincho para 30 personas y cancha de paddle, con servicios y equipamiento para eventos, actividades y celebraciones.",
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
  title:
    "Apart Hotel & Spa nivel Oro en sustentabilidad, lujo y confort responsable.",
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
  return (
    <>
      <HeroSection data={heroData} style={{}} />
      <AboutSection data={aboutData} />
      <div
        style={{
          width: "200px",
          height: "4px",
          background: "linear-gradient(90deg, #C5A46D 0%, #F5F4F1 100%)",
          margin: "1px auto 32px auto",
          borderRadius: "2px",
          boxShadow: "0 2px 8px rgba(197,164,109,0.15)",
        }}
      ></div>
      {/* Sección de consulta de disponibilidad eliminada */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <VideoBlock
          videoBgUrl="/images/Video_bg_1.webp"
          videoUrl="https://www.youtube.com/embed/UJEUwEJ6gH4"
          title=""
          playerStyle1
        />
      </Section>
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
        className="cs_gray_bg"
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
