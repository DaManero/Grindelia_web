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
    iconUrl: "/images/icons/swimmer.svg",
    title: "Apto para familias",
    subTitle: `Desde áreas de poco profundidad para niños pequeños hasta emocionantes toboganes acuáticos y parques de chapoteo, las instalaciones de piscina aptas para familias aseguran que los huéspedes de todas las edades disfruten de momentos inolvidables juntos.`,
  },
  {
    iconUrl: "/images/icons/dryer.svg",
    title: "Solo para adultos",
    subTitle: `Para aquellos que buscan paz y tranquilidad, las áreas de piscina solo para adultos ofrecen un escape sereno del ajetreo y el bullicio, completas con tumbonas lujosas.`,
  },
  {
    iconUrl: "/images/icons/massage.svg",
    title: "Bienestar y Fitness",
    subTitle: `Muchas propiedades incorporan elementos de bienestar en sus instalaciones de piscina, como carriles de natación para entusiastas, chorros de hidromasaje para relajación y zonas de spa.`,
  },
];

const facilityData = [
  {
    imgUrl: "/images/pool_service_thumb_1.webp",
    title: "El diseño de una piscina es primordial para su atractivo",
    subTitle: "DISEÑO MODERNO DE PISCINA",
    description: `El diseño de una piscina es primordial para su atractivo, con factores como tamaño, forma y entorno que juegan un papel crucial en la creación de la atmósfera deseada. Ya sea una elegante piscina infinita con vista a la naturaleza y apta para toda la familia.`,
  },
  {
    imgUrl: "/images/pool_service_thumb_2.webp",
    title: "Quincho y cancha de paddle para eventos y actividad física",
    subTitle: "QUINCHO · CANCHA DE PADDLE",
    description: `Contamos con un quincho equipado para hasta 30 personas, ideal para celebraciones y reuniones, y una cancha de paddle disponible para huéspedes que buscan actividad física y entretenimiento en el complejo.`,
  },
];

export default function PiletaPage() {
  pageTitle("Piscina Infinita");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Piscina, Quincho y Paddle"
        bgImgUrl="/images/page_heading_bg_infinity_pool.webp"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className="container-fluid p-0"
      >
        <AboutSection8
          sectionTitle="La piscina es el corazón del resort: un espacio de relajación y encuentro; dispone además de quincho y cancha de paddle"
          sectionSubTitle="INSTALACIONES PARA TU BIENESTAR"
          marqueeText="PISCINA, QUINCHO Y PADDLE"
          imgUrl1="/images/pool_img_2.webp"
          imgUrl2="/images/pool_img_1.webp"
          imgUrl3="/images/pool_img_3.webp"
        />
      </Section>
      <Section
        topSpaceLg="10"
        topSpaceMd="55"
        bottomSpaceLg="140"
        bottomSpaceMd="70"
      ></Section>
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className="container-fluid p-0"
      >
        <FacilitySection7 data={facilityData} />
      </Section>
    </>
  );
}
