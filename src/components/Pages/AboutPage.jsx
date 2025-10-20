import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import AboutSection4 from "../Section/AboutSection/AboutSection4";
import Section from "../Section";
import FeatureSection6 from "../Section/FeatureSection/FeatureSection6";
import VideoBlock from "../VideoBlock";

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
      "Ofrecemos una propuesta de valor que combina calidad, diseño y sostenibilidad, entregando experiencias memorables y una inversión en bienestar a largo plazo.",
  },
];

const datanew = [
  {
    subTitle: `Somos un equipo comprometido con crear espacios que respetan y abrazan la naturaleza de Las Gaviotas. Nuestro proyecto nace de la convicción de
que es posible vivir con confort y elegancia sin comprometer el medio ambiente.
Por eso, diseñamos edificios sustentables que aprovechan inteligentemente cada
recurso: desde la recolección de agua de lluvia hasta el uso de energía solar,
implementando tecnologías como piso radiante, aerotermia y construcción en seco
Steel Framing que minimiza la huella de carbono.
Creemos que el verdadero lujo está en despertar con vistas al verde, disfrutar
de espacios luminosos con ventilación natural, y saber que tu hogar genera su
propia energía. Cada decisión, desde la orientación del edificio hasta la
elección de materiales de bajo mantenimiento, está pensada para ofrecerte
calidad de vida a largo plazo con el menor impacto ambiental posible. No solo
construimos departamentos; creamos un estilo de vida consciente donde el bienestar
personal y el cuidado del entorno van de la mano.`,
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
        topSpaceLg="10"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
        className="cs_gray_bg"
      >
        <AboutSection4 data={aboutData} />
      </Section>

      {/* Sección nueva: texto extendido sobre Nosotros (desde datanew) */}
      <Section
        topSpaceLg="60"
        topSpaceMd="40"
        bottomSpaceLg="60"
        bottomSpaceMd="40"
        className="cs_custom_bg"
      >
        <div className="container">
          <div
            className="cs_section_heading cs_align_left"
            style={{ marginBottom: 24 }}
          >
            <h3 className="cs_fs_38 cs_mb_20">Nuestro compromiso</h3>
            {/* renderizar el texto como párrafo continuo usando la clase de subtítulo */}
            <div className="cs_text cs_two_columns">
              <p className="cs_mb_12">
                {datanew[0].subTitle.replace(/\n+/g, " ").trim()}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        topSpaceLg="20"
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
