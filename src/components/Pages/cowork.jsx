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
    title: "Servicio de Bar",
    subTitle: `Infusiones y jugos de cortesía. Servicio de Bar para mantenerte energizado durante tu jornada.`,
  },
  {
    iconUrl: "/images/icons/restaurant.svg",
    title: "Espacios Flexibles",
    subTitle: `Elige entre zonas de trabajo y espacios de esparcimiento y entretenimiento.`,
  },
  {
    iconUrl: "/images/icons/router.svg",
    title: "Conectividad",
    subTitle: `Wi-Fi en todo el espacio y salas con telvisores para presentaciones y reuniones.`,
  },
];

const facilityData = [
  {
    imgUrl: "/images/zona_trabajo_thumb_1.webp",
    title: "Espacio de trabajo confortable y funcional",
    subTitle: "ZONA DE TRABAJO",
    description: `Descubrí un ambiente moderno y sustentable para potenciar tu productividad y creatividad, rodeado de naturaleza.`,
  },
  {
    imgUrl: "/images/zona_trabajo_thumb_2.webp",
    title: "Juegos, entretenimiento y relax",
    subTitle: "ZONA DE ENTRETENIMIENTO",
    description: `Area para relajarse y disfrutar de actividades recreativas.`,
  },
];

export default function CoworkPage() {
  pageTitle("Salón de usos múltiples");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Salón de usos múltiples"
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
          sectionTitle="Salón de usos múltiples diseñado para trabajo y esparcimiento: espacios flexibles para reuniones, concentración y actividades sociales en un entorno sustentable."
          sectionSubTitle="Trabajá en comunidad"
          marqueeText="ESPACIO FLEXIBLE DE USOS MULTIPLES"
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
          sectionSubTitle="Comodidades y Ventajas"
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
