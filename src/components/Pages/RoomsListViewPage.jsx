import { useEffect } from "react";
import Section from "../Section";
import SearchSection from "../Section/SearchSection";
import Spacing from "../Spacing";
import RoomSection10 from "../Section/RoomSection/RoomSection10";
import RoomSection11 from "../Section/RoomSection/RoomSection11";
import { pageTitle } from "../../helpers/PageTitle";

const roomData = [
  {
    imgUrl: "/images/room_4.webp",
    title: "Deluxe Room",
    subTitle: `Enjoy a cozy and well-appointed room, complete with breakfast and unlimited access to our thermal pools, Spa & Wellness facilities. Please note that extra beds are not available in this room category`,
    currency: "$",
    price: 320,
    pricePer: "/Night",
    btnText: "View Details",
    btnUrl: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_5.jpeg",
    title: "Standard Room",
    subTitle: `Enjoy a cozy and well-appointed room, complete with breakfast and unlimited access to our thermal pools, Spa & Wellness facilities. Please note that extra beds are not available in this room category`,
    currency: "$",
    price: 450,
    pricePer: "/Night",
    btnText: "View Details",
    btnUrl: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_6.jpeg",
    title: "Superior Room",
    subTitle: `Enjoy a cozy and well-appointed room, complete with breakfast and unlimited access to our thermal pools, Spa & Wellness facilities. Please note that extra beds are not available in this room category`,
    currency: "$",
    price: 520,
    pricePer: "/Night",
    btnText: "View Details",
    btnUrl: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },

  {
    imgUrl: "/images/room_22.jpeg",
    title: "Pearl Suite",
    subTitle: `Enjoy a cozy and well-appointed room, complete with breakfast and unlimited access to our thermal pools, Spa & Wellness facilities. Please note that extra beds are not available in this room category`,
    currency: "$",
    price: 590,
    pricePer: "/Night",
    btnText: "View Details",
    btnUrl: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_23.jpeg",
    title: "Sunrise Villa",
    subTitle: `Enjoy a cozy and well-appointed room, complete with breakfast and unlimited access to our thermal pools, Spa & Wellness facilities. Please note that extra beds are not available in this room category`,
    currency: "$",
    price: 780,
    pricePer: "/Night",
    btnText: "View Details",
    btnUrl: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_24.jpeg",
    title: "Sea View",
    subTitle: `Enjoy a cozy and well-appointed room, complete with breakfast and unlimited access to our thermal pools, Spa & Wellness facilities. Please note that extra beds are not available in this room category`,
    currency: "$",
    price: 690,
    pricePer: "/Night",
    btnText: "View Details",
    btnUrl: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
];

const roomData2 = [
  {
    imgUrl: "/images/room_25.jpeg",
    title: "Corporate Center",
    currency: "$",
    price: 900,
    pricePer: "/Day",
    href: "/room/room-details",
    btnText: "Discover More",
    features: ["1200 Sq", "120-300 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_26.jpeg",
    title: "Party Center",
    currency: "$",
    price: 1000,
    pricePer: "/Day",
    href: "/room/room-details",
    btnText: "Discover More",
    features: ["1500 Sq", "300-350 Guests", "Free Wi-Fi"],
  },
];

export default function RoomsListViewPage() {
  pageTitle("Room List View");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <Spacing lg="100" md="80" />
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: 'url("/images/form_bg.jpeg")' }}
        topSpaceLg="135"
        topSpaceMd="70"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <SearchSection
          sectionTitle="Secure Your Spot: Reserve Your <br>Stay at Seapearl Hostel"
          variant="cs_accent_bg cs_type_2"
        />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <RoomSection11
          sectionTitle="Our Exquisite Rooms & Suites Collection"
          sectionSubTitle="ROOMS & SUITES"
          data={roomData}
        />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="140"
        bottomSpaceMd="70"
      >
        <RoomSection10
          sectionTitle="Event Accommodation: Elevate Your <br />Experience with Us"
          sectionSubTitle="EVENTS SPACE"
          data={roomData2}
        />
      </Section>
    </>
  );
}
