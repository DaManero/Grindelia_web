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
    iconUrl: "/images/icons/restaurant.svg",
    title: "Restaurante & Bar",
    subTitle:
      "Gastronomía de autor con vista al mar. Platos y tragos para todos los gustos. Disfrutá de un ambiente elegante y relajado, ideal para compartir en pareja, familia o amigos. Nuestro menú fusiona sabores locales e internacionales con productos frescos de estación.",
  },
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
    title: "Piscina Infinita",
    subTitle:
      "Piscina climatizada con borde infinito y solárium. Disfrutá de vistas únicas al mar y espacios de relax al aire libre. Ideal para nadar, tomar sol o compartir momentos inolvidables en familia.",
  },
  {
    iconUrl: "/images/icons/briefcase.svg",
    title: "Centro de Negocios",
    subTitle:
      "Salas de reuniones y espacios de coworking para tu comodidad. Equipamiento audiovisual, Wi-Fi de alta velocidad y asistencia personalizada. Perfecto para eventos corporativos, workshops y encuentros profesionales.",
  },
  {
    iconUrl: "/images/icons/router.svg",
    title: "Wifi & Internet",
    subTitle:
      "Wifi de alta velocidad en todo el complejo, incluido en tu estadía. Conexión estable para trabajar, estudiar o disfrutar de tus contenidos favoritos. Siempre conectado, estés donde estés en Grindelia.",
  },
  {
    iconUrl: "/images/icons/taxi.svg",
    title: "Traslado al Aeropuerto",
    subTitle:
      "Coordinamos tu traslado para que llegues y partas sin preocupaciones. Servicio seguro y puntual, disponible las 24 horas. Consultá por traslados privados o compartidos según tu preferencia.",
  },
  {
    iconUrl: "/images/icons/dryer.svg",
    title: "Lavandería",
    subTitle:
      "Servicio de lavandería disponible para tu comodidad. Entrega rápida y cuidado profesional de tus prendas. Consultá por servicios exprés y planchado.",
  },
  {
    iconUrl: "/images/icons/room-service.svg",
    title: "Room Service 24/7",
    subTitle:
      "Servicio a la habitación todo el día, todos los días. Pedí tu desayuno, almuerzo, cena o snacks sin moverte de tu habitación. Atención personalizada y menú variado para cualquier momento.",
  },
];

const facilityData = [
  {
    title: "Seapearl: el oasis para tus reuniones y eventos",
    subTitle: "SALÓN DE CONFERENCIAS",
    description: `Descubrí un espacio pensado para el éxito en el Salón de Conferencias de Grindelia. Equipado para la productividad y la sofisticación, nuestro salón ofrece comodidades modernas, servicio profesional y un ambiente que fomenta la innovación.`,
    imgUrl: "/images/feature_img_10.jpeg",
    videoUrl: "https://www.youtube.com/embed/UJEUwEJ6gH4",
    btnText: "Ver más",
    btnUrl: "/restaurant",
  },
];

const faqData = [
  {
    title: "¿Cuáles son los horarios de check-in y check-out?",
    content: "El check-in es a las 15:00 hs y el check-out es a las 11:00 hs.",
  },
  {
    title: "¿Hay estacionamiento disponible y tiene costo?",
    content:
      "El estacionamiento está disponible para huéspedes sin costo adicional.",
  },
  {
    title: "¿Se permiten mascotas?",
    content: "No se permiten mascotas en el establecimiento.",
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
    title: "¿Hay acceso directo a la playa desde el hotel?",
    content: "Sí, el hotel cuenta con acceso directo a la playa.",
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
        bgImgUrl="/images/page_heading_bg_services.jpeg"
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
      <Section
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
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <FacilitySection4 data={facilityData} />
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
        className="cs_primary_bg"
        style={{ backgroundImage: `url(/images/newsletter_bg.jpeg)` }}
      >
        <NewsletterSection
          title="¡Suscribite a nuestro newsletter y recibí ofertas y novedades exclusivas de Grindelia!"
          variant="cs_color_2"
        />
      </Section>
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
          thumbUrl="/images/faq_img.jpeg"
          data={faqData}
        />
      </Section>
    </>
  );
}
