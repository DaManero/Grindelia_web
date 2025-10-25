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
    imgUrl: "/images/pool_service_thumb_1.jpeg",
    title:
      "El diseño de una piscina es primordial para su atractivo, con factores",
    subTitle: "DISEÑO DE PISCINA LUJOSO",
    description: `El diseño de una piscina es primordial para su atractivo, con factores como tamaño, forma y entorno que juegan un papel crucial en la creación de la atmósfera deseada. Ya sea una elegante piscina infinita con vista al océano, una laguna apta para familias con toboganes y cascadas, o un sereno retiro solo para adultos.`,
  },
  {
    imgUrl: "/images/pool_service_thumb_2.jpeg",
    title: "Bar junto a la piscina que sirve cócteles refrescantes",
    subTitle: "CENA JUNTO A LA PISCINA",
    description: `Ya sea un bar junto a la piscina con cócteles y snacks, o un espacio coworking con vistas al agua, las opciones suman confort y productividad a la experiencia.`,
  },
];

export default function InfinityPoolPage() {
  pageTitle("Piscina Infinita");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Piscina Infinita"
        bgImgUrl="/images/page_heading_bg_infinity_pool.jpeg"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className="container-fluid p-0"
      >
        <AboutSection8
          sectionTitle="En el ámbito de la hospitalidad, la piscina no es solo un amenidad recreativa, es un punto focal de relajación, socialización y lujo."
          sectionSubTitle="ELEVANDO LAS INSTALACIONES DE LA PISCINA"
          marqueeText="BIENVENIDO A GRINDELIA COWORKING"
          imgUrl1="/images/pool_img_1.jpeg"
          imgUrl2="/images/pool_img_2.jpeg"
          imgUrl3="/images/pool_img_3.jpeg"
        />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="140"
        bottomSpaceMd="70"
      >
        <FeatureSection7
          sectionTitle="Indulge in Culinary Delights at <br />Your Convenience"
          sectionSubTitle="FACILITIES YOU MAY LIKE"
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
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <NewsletterSection title="¡Para ofertas exclusivas y actualizaciones, suscríbete a nuestro boletín de SeaPearl!" />
      </Section>
    </>
  );
}
