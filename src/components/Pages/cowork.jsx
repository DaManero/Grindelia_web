// TODO: Actualizar contenido para coworking
import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import Section from "../Section";
import AboutSection8 from "../Section/AboutSection/AboutSection8";
import NewsletterSection from "../Section/NewsletterSection";
import FeatureSection7 from "../Section/FeatureSection/FeatureSection7";
import FacilitySection7 from "../Section/FacilitySection/FacilitySection7";
import { pageTitle } from "../../helpers/PageTitle";

const featureData = [
  {
    iconUrl: "/images/icons/mug-tea.svg",
    title: "Café y Snacks",
    subTitle: `Disfrutá de café de especialidad y snacks saludables durante tu jornada de trabajo.`,
  },
  {
    iconUrl: "/images/icons/restaurant.svg",
    title: "Espacios Flexibles",
    subTitle: `Elige entre escritorios individuales, salas de reuniones y áreas colaborativas.`,
  },
  {
    iconUrl: "/images/icons/bowl-chopsticks-noodles.svg",
    title: "Comunidad",
    subTitle: `Conectá con otros profesionales y participá en eventos exclusivos para miembros.`,
  },
];

const facilityData = [
  {
    imgUrl: "/images/restaurant_service_thumb_1.jpeg",
    title: "Tu espacio de trabajo ideal en Mar de las Pampas",
    subTitle: "COWORKING PREMIUM",
    description: `Descubrí un ambiente moderno y sustentable para potenciar tu productividad y creatividad, rodeado de naturaleza.`,
  },
  {
    imgUrl: "/images/restaurant_service_thumb_2.jpeg",
    title: "Servicios exclusivos para tu jornada",
    subTitle: "CONFORT Y TECNOLOGÍA",
    description: `Acceso a WiFi de alta velocidad, impresiones, lockers y atención personalizada para que solo te ocupes de tu trabajo.`,
  },
];

export default function CoworkPage() {
  pageTitle("Coworking");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Coworking"
        bgImgUrl="/images/Page_heading_bg_restaurant.webp"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className="container-fluid p-0"
      >
        <AboutSection8
          sectionTitle="Un espacio pensado para profesionales, emprendedores y equipos que buscan inspiración y eficiencia en un entorno natural."
          sectionSubTitle="Trabajá en comunidad"
          marqueeText="BIENVENIDO A GRINDELIA COWORKING"
          imgUrl1="/images/Dine_img_1.webp"
          imgUrl2="/images/Dine_img_2.webp"
          imgUrl3="/images/Dine_img_3.webp"
        />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="140"
        bottomSpaceMd="70"
      >
        <FeatureSection7
          sectionTitle="Servicios y comodidades para tu jornada"
          sectionSubTitle="Coworking Features"
          data={featureData}
        />
      </Section>
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className="container-fluid p-0"
      >
        <FacilitySection7 data={facilityData} />
      </Section>
      {/* Se eliminó la sección de suscripción por mail */}
    </>
  );
}
