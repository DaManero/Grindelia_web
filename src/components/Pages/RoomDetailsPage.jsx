import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import Section from "../Section";
import RoomDetails from "../RoomDetails";
import FeatureSection2 from "../Section/FeatureSection/FeatureSection2";
import RoomSection12 from "../Section/RoomSection/RoomSection12";
import GallerySection6 from "../Section/GallerySection/GallerySection6";
import { pageTitle } from "../../helpers/PageTitle";

const roomDetailsData = {
  title:
    "Enjoy a cozy and well-appointed room, complete with breakfast and unlimited access to our thermal pools, Spa & Wellness facilities. Please note that extra beds are not available in this room category",
  title2: "About Accommodation",
  detailes: `Relax in our cozy, compact room featuring a 140cm bed, satellite TV, coffee and tea set, minibar, desk, air conditioning, and complimentary Wi-Fi. Unwind in the bathroom with a shower, and find bathrobe and slippers for added comfort. Our non-smoking rooms also include SeaPearl's inclusive service, ensuring a delightful stay. Your accommodation price covers breakfast and unrestricted entry to our thermal pools and Wellness & Spa.`,
  roomFacilitiesTitle: "Facilities",
  roomFacilities: [
    { iconUrl: "/images/icons/facility_icon_1.svg", title: "King size bed" },
    { iconUrl: "/images/icons/facility_icon_2.svg", title: "Personal Locker" },
    { iconUrl: "/images/icons/facility_icon_3.svg", title: "Desk" },
    { iconUrl: "/images/icons/facility_icon_4.svg", title: "Personal Locker" },
    { iconUrl: "/images/icons/facility_icon_5.svg", title: "Air Condition" },
    { iconUrl: "/images/icons/facility_icon_6.svg", title: "Minibar" },
    { iconUrl: "/images/icons/facility_icon_7.svg", title: "Coffee and tea" },
    { iconUrl: "/images/icons/facility_icon_8.svg", title: "Television" },
    { iconUrl: "/images/icons/facility_icon_9.svg", title: "Wi Fi" },
    { iconUrl: "/images/icons/facility_icon_10.svg", title: "Bathtub" },
    { iconUrl: "/images/icons/facility_icon_11.svg", title: "Breakfast" },
    {
      iconUrl: "/images/icons/facility_icon_12.svg",
      title: "24/7 Room service",
    },
  ],
  formTitle: "Reservation",
  currency: "$",
  price: 450,
  pricePer: "/Night",
};

const galleryData = [
  { imgUrlLg: "/images/room_lg_1.jpeg", imgUrlSm: "/images/room_sm_1.jpeg" },
  { imgUrlLg: "/images/room_lg_2.jpeg", imgUrlSm: "/images/room_sm_2.jpeg" },
  { imgUrlLg: "/images/room_lg_3.jpeg", imgUrlSm: "/images/room_sm_3.jpeg" },
  { imgUrlLg: "/images/room_lg_1.jpeg", imgUrlSm: "/images/room_sm_1.jpeg" },
  { imgUrlLg: "/images/room_lg_2.jpeg", imgUrlSm: "/images/room_sm_2.jpeg" },
  { imgUrlLg: "/images/room_lg_3.jpeg", imgUrlSm: "/images/room_sm_3.jpeg" },
];

const featureData = [
  {
    iconUrl: "/images/icons/cowork.svg",
    title: "Coworking",
    subTitle:
      "Exceptional dining awaits at our resort. Immerse yourself in exquisite flavors with view to match. Pure indulgence, effortlessly delivered.",
  },
  {
    iconUrl: "/images/icons/massage.svg",
    title: "Spa & Wellness",
    subTitle:
      "Discover serenity at our spa. Indulge in blissful treatments and unwind in a haven of relaxation. Your path to rejuvenation starts here",
  },
  {
    iconUrl: "/images/icons/gym.svg",
    title: "Fitness Center",
    subTitle:
      "Exceptional dining awaits at our resort. Immerse yourself in exquisite flavors with view to match. Pure indulgence, effortlessly delivered.",
  },
  {
    iconUrl: "/images/icons/swimmer.svg",
    title: "Infinity Pool",
    subTitle:
      "Our Infinity Pool Escape. Surrender to breath taking views and pure relaxation as you soak in the serenity of our infinity pool.",
  },
  {
    iconUrl: "/images/icons/briefcase.svg",
    title: "Conference Center",
    subTitle:
      "Stay productive with our well-equipped business event center, offering essential services for business travelers.",
  },
  {
    iconUrl: "/images/icons/room-service.svg",
    title: "24/7 Room Service",
    subTitle:
      "Delight in the convenience of round-the-clock room service, catering, Laundry everything to your needs at any hour.",
  },
];

const roomData = [
  {
    imgUrl: "/images/Room_4-1.webp",
    title: "Deluxe Room",
    currency: "$",
    price: 320,
    pricePer: "/Night",
    href: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_5.webp",
    title: "Standard Room",
    currency: "$",
    price: 450,
    pricePer: "/Night",
    href: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_6.jpeg",
    title: "Superior Room",
    currency: "$",
    price: 520,
    pricePer: "/Night",
    href: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
  {
    imgUrl: "/images/room_5.jpeg",
    title: "Standard Room",
    currency: "$",
    price: 450,
    pricePer: "/Night",
    href: "/room/room-details",
    features: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
  },
];

export default function RoomDetailsPage() {
  pageTitle("Room Details");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Deluxe Rooms"
        bgImgUrl="/images/page_heading_bg_rooms.jpeg"
      />
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="100"
        bottomSpaceMd="70"
      >
        <RoomDetails data={roomDetailsData} />
      </Section>
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <GallerySection6 data={galleryData} />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <FeatureSection2
          sectionTitle="Unveiling Unmatched Coastal <br />Luxury and Hospitality"
          sectionSubTitle="Why CHOOSE SEAPEARL"
          data={featureData}
        />
      </Section>
      <Section
        topSpaceLg="140"
        topSpaceMd="70"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <RoomSection12
          sectionTitle="Other Rooms"
          data={roomData}
          lightColor={false}
        />
      </Section>
    </>
  );
}
