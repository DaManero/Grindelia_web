import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import FeatureSection2 from "../Section/FeatureSection/FeatureSection2";
import Section from "../Section";
import VideoBlock from "../VideoBlock";
import NewsletterSection from "../Section/NewsletterSection";
import FacilitySection4 from "../Section/FacilitySection/FacilitySection4";
import FaqSection from "../Section/FaqSection";
import { pageTitle } from "../../helpers/PageTitle";

const featureData = [
  {
    iconUrl: "/images/icons/massage.svg",
    title: "Spa & Bienestar",
    subTitle:
      "Relajate en nuestro spa con tratamientos exclusivos y zona de relax. Contamos con sauna seco y húmedo, masajes personalizados y circuitos de bienestar. Un espacio pensado para tu descanso y renovación física y mental.",
  },
  {
    iconUrl: "/images/icons/gym.svg",
    title: "Gimnasio",
    subTitle:
      "Entrená con equipos de última generación y vista panorámica. Nuestro gimnasio está abierto las 24 horas y ofrece rutinas para todos los niveles. Mantente activo durante tu estadía y disfrutá de un entorno saludable y moderno.",
  },
  {
    iconUrl: "/images/icons/swimmer.svg",
    title: "Piscina ",
    subTitle:
      "Piscina climatizada y solárium. Disfrutá de un espacios de relax al aire libre. Ideal para nadar, tomar sol o compartir momentos inolvidables en familia.",
  },

  {
    iconUrl: "/images/icons/router.svg",
    title: "Wifi & Internet",
    subTitle:
      "Wifi de alta velocidad en todo el complejo, incluido en tu estadía. Conexión estable para trabajar, estudiar o disfrutar de tus contenidos favoritos. Siempre conectado, estés donde estés en Grindelia.",
  },

  {
    iconUrl: "/images/icons/dryer.svg",
    title: "Lavandería",
    subTitle:
      "Servicio de lavandería disponible para tu comodidad. Entrega rápida y cuidado profesional de tus prendas. Consultá por servicios exprés y planchado.",
  },
  {
    iconUrl: "/images/icons/room-service.svg",
    title: "Room Service",
    subTitle:
      "Atención en la habitación para tu comodidad, con servicio personalizado y opciones sujetas a disponibilidad.",
  },
];

const faqData = [
  {
    title: "¿Cuáles son los horarios de check-in y check-out?",
    content: "El check-in es a las 14:00 hs y el check-out es a las 11:00 hs.",
  },
  {
    title: "¿Hay estacionamiento disponible y tiene costo?",
    content:
      "El estacionamiento está disponible para huéspedes sin costo adicional.",
  },
  {
    title: "¿Se permiten mascotas?",
    content: "El hotel acepta mascotas bajo ciertas condiciones (consultar)",
  },
  {
    title: "¿Hay código de vestimenta para el restaurante?",
    content:
      "No hay un código de vestimenta estricto, pero se recomienda vestimenta casual elegante.",
  },
  {
    title: "¿El Wi-Fi está incluido y es gratuito?",
    content: "Sí, el Wi-Fi es gratuito y está disponible en todo el complejo.",
  },
  {
    title: "¿Tienen instalaciones para reuniones o eventos?",
    content:
      "Sí, contamos con salones equipados para reuniones y eventos empresariales.",
  },
  {
    title:
      "¿A qué distancia se encuentra la playa y el centro de Mar de las Pampas?",
    content:
      "El Apart se encuentra a 300 mts de la playa y a 650 mts del centro de la ciudad.",
  },
];

export default function ServicesPage() {
  pageTitle("Servicios");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Servicios"
        bgImgUrl="/images/page_heading_bg_services.webp"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="145"
        bottomSpaceMd="75"
      >
        <FeatureSection2
          sectionTitle="Descubrí el lujo y la hospitalidad costera sin igual"
          sectionSubTitle="¿Por qué elegir Grindelia?"
          data={featureData}
        />
      </Section>
      {/* <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <VideoBlock
          videoBgUrl="/images/video_bg_8.jpeg"
          videoUrl="https://www.youtube.com/embed/UJEUwEJ6gH4"
          title="GRINDELIA"
          variant="cs_color_1"
          playerStyle1
        />
      </Section> */}
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
        className="cs_gray_bg"
      >
        <FaqSection
          sectionTitle="Preguntas frecuentes"
          sectionSubTitle="FAQ’S"
          thumbUrl="/images/faq_img.webp"
          data={faqData}
        />
      </Section>
    </>
  );
}
