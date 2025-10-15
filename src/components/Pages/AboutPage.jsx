import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import AboutSection4 from "../Section/AboutSection/AboutSection4";
import Section from "../Section";
import FeatureSection6 from "../Section/FeatureSection/FeatureSection6";
import VideoBlock from "../VideoBlock";
import ServiceSection4 from "../Section/ServiceSection/ServiceSection4";
import { pageTitle } from "../../helpers/PageTitle";

const aboutData = {
  title:
    "Complejo sustentable en Las Gaviotas, frente al mar. Diseño bioclimático que minimiza el impacto ambiental, reduce consumo energético y prioriza el confort en armonía con la naturaleza.",
  subTitle: "SOBRE NOSOTROS",
  imgUrl: "/images/About_us_1.webp",
  featureList: [
    {
      title: "Certif. de Sustentabilidad",
      value: "Nivel ORO",
    },
    {
      title: "Construcción y diseño",
      value: "1350 m2",
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
      "Ubicado en un entorno pintoresco, Grindelia ofrece vistas impresionantes y acceso directo a la playa, brindando a los huéspedes una escapada serena y rejuvenecedora.",
  },
  {
    itemNumber: "02",
    title: "Alojamientos de lujo",
    subTitle:
      "Nuestro resort cuenta con habitaciones y suites opulentas, diseñadas meticulosamente para ofrecer confort, estilo y relajación, asegurando una estadía memorable para cada huésped.",
  },
  {
    itemNumber: "03",
    title: "Amenities de primer nivel",
    subTitle:
      "Grindelia ofrece una variedad de amenidades para cada huésped, incluyendo spa, gimnasio, piscina infinita y salas de conferencias, garantizando una experiencia integral.",
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
      "Con tarifas competitivas y paquetes especiales, Grindelia ofrece un valor excepcional para quienes buscan alojamiento de lujo y experiencias incomparables.",
  },
];

const serviceData = [
  {
    title: "Alojamientos de lujo",
    imgUrl: "/images/service_img_6.jpeg",
    href: "",
  },
  {
    title: "Restaurante Casabalina",
    imgUrl: "/images/service_img_7.jpeg",
    href: "",
  },
  {
    title: "Salones para eventos y negocios",
    imgUrl: "/images/service_img_8.jpeg",
    href: "",
  },
  {
    title: "Spa y Bienestar Grindelia",
    imgUrl: "/images/service_img_9.jpeg",
    href: "",
  },
  {
    title: "Piscina infinita",
    imgUrl: "/images/service_img_10.jpeg",
    href: "",
  },
  {
    title: "Recepción y seguridad 24 hs",
    imgUrl: "/images/service_img_9.jpeg",
    href: "",
  },
];

export default function AboutPage() {
  pageTitle("Sobre Nosotros");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Sobre Nosotros"
        bgImgUrl="/images/Page_heading_bg_about.webp"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
        className="cs_gray_bg"
      >
        <AboutSection4 data={aboutData} />
      </Section>
      <Section
        topSpaceLg="141"
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
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <VideoBlock
          videoBgUrl="/images/video_bg_1.jpeg"
          videoUrl="https://www.youtube.com/embed/UJEUwEJ6gH4"
          title="GRINDELIA"
          playerStyle1
        />
      </Section>
      {/* Sección de servicios eliminada por solicitud */}
    </>
  );
}

// No se importa ni se utiliza ningún archivo de la carpeta Layout en esta página.
// Solo se usan componentes de Section, PageHeadingSection, AboutSection4, FeatureSection6, VideoBlock y ServiceSection4.
