import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import Section from "../Section";
import VideoBlock from "../VideoBlock";
import FacilitySection5 from "../Section/FacilitySection/FacilitySection5";
import ServiceSection5 from "../Section/ServiceSection/ServiceSection5";
import AboutSection9 from "../Section/AboutSection/AboutSection9";
import { pageTitle } from "../../helpers/PageTitle";

const serviceData = {
  imgUrl1: "/images/service_img_1.jpeg",
  imgUrl2: "/images/service_img_2.jpeg",
  title: `Descubrí el Spa & Wellness de Grindelia Eco Apart Hotel`,
  subTitle: "BIENESTAR Y NATURALEZA",
  description: `Sumergite en un oasis de relajación y bienestar en nuestro Spa ecológico. Disfrutá de tratamientos exclusivos, masajes, faciales y circuitos de relax en un entorno sustentable, rodeado de naturaleza y tranquilidad. Nuestro equipo profesional te acompaña para renovar cuerpo y mente, cuidando el ambiente y tu salud.`,
  contactList: [
    {
      iconUrl: "/images/icons/clock-three.svg",
      title: "Horario de atención",
      subTitle: "10:00 a 20:00",
    },
    {
      iconUrl: "/images/icons/contact_icon_3.svg",
      title: "Reservas",
      subTitle: "+54 9 11 1234-5678",
    },
  ],
};

const facilityData = [
  {
    title: "Pileta climatizada y descubierta",
    subTitle: "",
    price: "",
    imgUrl: "/images/Spa_facility_1.webp",
    href: "/spa-wellness",
  },
  {
    title: "Ducha escocesa",
    subTitle: "",
    price: "",
    imgUrl: "/images/Spa_facility_2.webp",
    href: "/spa-wellness",
  },
  {
    title: "Sala de masajes",
    subTitle: "",
    price: "",
    imgUrl: "/images/Spa_facility_3.webp",
    href: "/spa-wellness",
  },
  {
    title: "Sauna seco",
    subTitle: "",
    price: "",
    imgUrl: "/images/Spa_facility_4.webp",
    href: "/spa-wellness",
  },
  {
    title: "Gym completo",
    subTitle: "",
    price: "",
    imgUrl: "/images/Spa_facility_5.webp",
    href: "/spa-wellness",
  },
];

const aboutData = {
  imgUrl: "/images/about_us_3.jpeg",
  title: "Conocé a nuestro equipo de bienestar",
  subTitle: "EXPERTOS EN SPA ECOLÓGICO",
  description: `En Grindelia Eco Apart Hotel, nuestro equipo está comprometido con tu bienestar y el cuidado del ambiente. Te acompañamos con técnicas holísticas, programas personalizados y asesoría integral para que vivas una experiencia de relax y salud en armonía con la naturaleza. <br /><br /> Ya sea que busques mejorar tu estado físico, reducir el estrés o potenciar tu vitalidad, nuestros profesionales te guían con dedicación y conocimiento en cada paso de tu estadía.`,
  btnText: "Contactanos",
  btnUrl: "/contact",
};

export default function SpaWellnessPage() {
  pageTitle("Spa & Wellness");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Spa & Wellness"
        bgImgUrl="/images/page_heading_bg_spa_wellness.jpeg"
      />
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <ServiceSection5 data={serviceData} />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
        className="cs_gray_bg"
      >
        <FacilitySection5
          sectionTitle={
            "Escapá y renovate: Descubrí el Spa ecológico de Grindelia <br />"
          }
          sectionSubTitle="INSTALACIONES DE SPA"
          data={facilityData}
          sectionTitleClass="spa-title-white"
        />
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <AboutSection9 data={aboutData} />
      </Section>

      {/*
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <VideoBlock
          videoBgUrl="/images/video_bg_9.jpeg"
          videoUrl="https://www.youtube.com/embed/UJEUwEJ6gH4"
          playerStyle2
          variant="cs_type_1"
        />
      </Section>
      */}
    </>
  );
}
