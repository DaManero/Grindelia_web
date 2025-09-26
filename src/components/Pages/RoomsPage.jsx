import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import Section from '../Section';
import RoomSection9 from '../Section/RoomSection/RoomSection9';
import SearchSection from '../Section/SearchSection';
import RoomSection10 from '../Section/RoomSection/RoomSection10';
import { pageTitle } from '../../helpers/PageTitle';

const roomData = [
  {
    imgUrl: '/images/room_4.jpeg',
    title: 'Deluxe Room',
    currency: '$',
    price: 320,
    pricePer: '/Night',
    href: '/room/room-details',
    features: ['110 Sq', '3-5 Guests', 'Free Wi-Fi'],
  },
  {
    imgUrl: '/images/room_5.jpeg',
    title: 'Standard Room',
    currency: '$',
    price: 450,
    pricePer: '/Night',
    href: '/room/room-details',
    features: ['110 Sq', '3-5 Guests', 'Free Wi-Fi'],
  },
  {
    imgUrl: '/images/room_6.jpeg',
    title: 'Superior Room',
    currency: '$',
    price: 520,
    pricePer: '/Night',
    href: '/room/room-details',
    features: ['110 Sq', '3-5 Guests', 'Free Wi-Fi'],
  },

  {
    imgUrl: '/images/room_22.jpeg',
    title: 'Pearl Suite',
    currency: '$',
    price: 590,
    pricePer: '/Night',
    href: '/room/room-details',
    features: ['110 Sq', '3-5 Guests', 'Free Wi-Fi'],
  },
  {
    imgUrl: '/images/room_23.jpeg',
    title: 'Sunrise Villa',
    currency: '$',
    price: 780,
    pricePer: '/Night',
    href: '/room/room-details',
    features: ['110 Sq', '3-5 Guests', 'Free Wi-Fi'],
  },
  {
    imgUrl: '/images/room_24.jpeg',
    title: 'Sea View',
    currency: '$',
    price: 690,
    pricePer: '/Night',
    href: '/room/room-details',
    features: ['110 Sq', '3-5 Guests', 'Free Wi-Fi'],
  },
];

const roomData2 = [
  {
    imgUrl: '/images/room_25.jpeg',
    title: 'Corporate Center',
    currency: '$',
    price: 900,
    pricePer: '/Day',
    href: '/room/room-details',
    btnText: 'Discover More',
    features: ['1200 Sq', '120-300 Guests', 'Free Wi-Fi'],
  },
  {
    imgUrl: '/images/room_26.jpeg',
    title: 'Party Center',
    currency: '$',
    price: 1000,
    pricePer: '/Day',
    href: '/room/room-details',
    btnText: 'Discover More',
    features: ['1500 Sq', '300-350 Guests', 'Free Wi-Fi'],
  },
];

export default function RoomsPage() {
  pageTitle('All Rooms');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Chose Your Rooms"
        bgImgUrl="/images/page_heading_bg_rooms.jpeg"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="70"
      >
        <RoomSection9
          sectionTitle="Our Exquisite Rooms & Suites Collection"
          sectionSubTitle="ROOMS & SUITES"
          data={roomData}
        />
      </Section>
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
