import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import Section from "../Section";
import ContactSection3 from "../Section/ContactSection/ContactSection3";
import GoogleMap from "../Widgets/GoogleMap";
import { pageTitle } from "../../helpers/PageTitle";

const contactData = [
  {
    iconUrl: "/images/icons/contact_icon_1.svg",
    title: "Dirección",
    subTitle:
      "Punta del Este y calle 28, B7165 Mar Azul, Provincia de Buenos Aires",
  },
  {
    iconUrl: "/images/icons/contact_icon_2.svg",
    title: "Email",
    subTitle: '<a href="mailto:info@grindelia.com">info@grindelia.com</a>',
  },
  {
    iconUrl: "/images/icons/contact_icon_3.svg",
    title: "Reservas y consultas",
    subTitle: '<a href="tel:+214544512009">+21 454 451 2009</a>',
  },
];

export default function ContactPage() {
  pageTitle("Contact");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Contact us"
        bgImgUrl="/images/Page_heading_bg_gallery.webp"
      />
      <Section
        topSpaceLg="150"
        topSpaceMd="72"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <ContactSection3
          sectionTitle="Contactactate con Grindelia Eco Apart"
          sectionSubTitle="CONTACTO"
          sectionDescription="Comunícate con nosotros por teléfono, correo electrónico o mediante nuestro formulario online. Esperamos tu consulta y queremos ayudarte a planificar una experiencia inolvidable en Grindelia Resort."
          data={contactData}
          contactThumb="/images/Contact_img.webp"
        />
      </Section>
      <div
        style={{
          width: "100vw",
          height: "450px",
          margin: "32px 0 0 50%",
          transform: "translateX(-50%)",
          borderRadius: "0",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.4221934003172!2d-57.02853828699717!3d-37.33433513554574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b5c34a8d3f495%3A0x1694783527aea9ad!2sPunta%20del%20Este%20%26%20C.%2028%2C%20B7165%20Mar%20Azul%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1759164900595!5m2!1ses!2sar&layer=c"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Hotel"
        ></iframe>
      </div>
    </>
  );
}
