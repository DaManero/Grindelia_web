import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import AboutSection4 from "../Section/AboutSection/AboutSection4";
import Section from "../Section";
import FeatureSection6 from "../Section/FeatureSection/FeatureSection6";
import VideoBlock from "../VideoBlock";
import ServiceSection4 from "../Section/ServiceSection/ServiceSection4";
import TestimonialSection from "../Section/TestimonialSection";
import NewsletterSection from "../Section/NewsletterSection";
import { pageTitle } from "../../helpers/PageTitle";

const aboutData = {
  title:
    "Curated to match your preferences and desires, our selection includes luxury resorts, exclusive tours, and transfers for an unparalleled experience",
  subTitle: "ABOUT US",
  imgUrl: "/images/about_us_1.jpeg",
  featureList: [
    {
      title: "Client Satisfaction",
      value: "100%",
    },
    {
      title: "Wining Awards",
      value: "03+",
    },
    {
      title: "Pro Team Members",
      value: "25+",
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
    title: "Amenidades de primer nivel",
    subTitle:
      "Seapearl ofrece una variedad de amenidades para cada huésped, incluyendo spa, gimnasio, piscina infinita y salas de conferencias, garantizando una experiencia integral.",
  },
  {
    itemNumber: "04",
    title: "Servicio impecable",
    subTitle:
      "Nuestro personal dedicado está comprometido a brindar un servicio personalizado y asegurar que cada aspecto de tu estadía supere las expectativas, desde el check-in hasta el check-out.",
  },
  {
    itemNumber: "05",
    title: "Organización de eventos sin complicaciones",
    subTitle:
      "Ya sea que organices un evento corporativo, boda o celebración especial, nuestro equipo de planificación trabajará contigo para crear una experiencia impecable e inolvidable.",
  },
  {
    itemNumber: "06",
    title: "Valor excepcional",
    subTitle:
      "Con tarifas competitivas y paquetes especiales, Seapearl ofrece un valor excepcional para quienes buscan alojamiento de lujo y experiencias incomparables.",
  },
];

const serviceData = [
  {
    title: "Luxury Accommodations",
    imgUrl: "/images/service_img_6.jpeg",
    href: "",
  },
  {
    title: "Casabalina Restaurant",
    imgUrl: "/images/service_img_7.jpeg",
    href: "",
  },
  {
    title: "Business and Event Facilities",
    imgUrl: "/images/service_img_8.jpeg",
    href: "",
  },
  {
    title: "SeaPearl Spa and Wellness",
    imgUrl: "/images/service_img_9.jpeg",
    href: "",
  },
  { title: "Infinity Pool", imgUrl: "/images/service_img_10.jpeg", href: "" },
  {
    title: "24-Hour Reception and Security",
    imgUrl: "/images/service_img_9.jpeg",
    href: "",
  },
];

const testimonialData = [
  {
    avatarImgUrl: "/images/avatar_1.png",
    avatarName: "Angrew Bolar",
    avatarDesignation: "Hotel Guest",
    avatarText:
      "Exceptional resort! From the exquisite dining to the serene spa and the  captivating infinity pool, every moment was pure bliss. Impeccable  service and breathtaking views – a perfect escape!",
    avatarReview: 5,
  },
  {
    avatarImgUrl: "/images/avatar_2.png",
    avatarName: "Cecilia Brooks",
    avatarDesignation: "Hotel Guest",
    avatarText:
      "Exceptional resort! From the exquisite dining to the serene spa and the  captivating infinity pool, every moment was pure bliss. Impeccable  service and breathtaking views – a perfect escape!",
    avatarReview: 4.5,
  },
  {
    avatarImgUrl: "/images/avatar_3.png",
    avatarName: "Carlo Basile",
    avatarDesignation: "VIP Guest",
    avatarText:
      "Exceptional resort! From the exquisite dining to the serene spa and the  captivating infinity pool, every moment was pure bliss. Impeccable  service and breathtaking views – a perfect escape!",
    avatarReview: 5,
  },
];

export default function AboutPage() {
  pageTitle("About Us");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="About Us"
        bgImgUrl="/images/page_heading_bg_about.jpeg"
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
          sectionTitle="Descubre el lujo y el conford en un ambiente natural"
          sectionSubTitle="Por qué elegir Seapearl"
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
          title="SEAPEARL"
          playerStyle1
        />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <ServiceSection4
          sectionTitle="Explore Our Exclusive Resort Facilities"
          sectionSubTitle="OUR SERVICES"
          data={serviceData}
        />
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
        className="cs_gray_bg"
      >
        <TestimonialSection data={testimonialData} />
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <NewsletterSection title="For Exclusive Offers and Updates Subscribe Our SeaPearl Newsletter!" />
      </Section>
    </>
  );
}
