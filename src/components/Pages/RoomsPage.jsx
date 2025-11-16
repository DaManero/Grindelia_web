import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import Section from "../Section";
import RoomSection9 from "../Section/RoomSection/RoomSection9";
import { pageTitle } from "../../helpers/PageTitle";

const roomData = [
  {
    imgUrl: "/images/Room_4.jpg",
    title: "Premium 3 Ambientes",
    href: "/room/3a", // link único
    features: ["78 m²", "5 Huéspedes", "Wi-Fi"],
  },
  {
    imgUrl: "/images/Room_5.jpg",
    title: "Premium 2 Ambientes",
    href: "/room/2a", // link único
    features: ["78 m²", "3 Huéspedes", "Wi-Fi"],
  },
];

export default function RoomsPage() {
  pageTitle("Todas las Habitaciones");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Nuestras Habitaciones"
        bgImgUrl="/images/page_heading_bg_rooms.jpg"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="70"
      >
        <RoomSection9
          sectionTitle="Nuestra Colección de Habitaciones & Suites"
          sectionSubTitle="HABITACIONES & SUITES"
          data={roomData}
        />
      </Section>
      {/* Sección de reserva eliminada por solicitud */}
      {/* Sección de alojamiento para eventos eliminada por solicitud */}
    </>
  );
}
