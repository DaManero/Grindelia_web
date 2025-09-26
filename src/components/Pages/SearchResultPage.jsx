import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import AvailabilityForm from '../Forms/AvailabilityForm';
import RoomCardStyle7 from '../RoomCard/RoomCardStyle7';
import Section from '../Section';
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

export default function SearchResultPage() {
  pageTitle('Search Result');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Room Search Results"
        bgImgUrl="/images/page_heading_bg_rooms.jpeg"
        variant="cs_size_2"
      />
      <Section
        topSpaceLg="100"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-4">
              <AvailabilityForm variant=" cs_type_6 cs_sticky_top_100" />
            </div>
            <div className="col-lg-8">
              <div className="row cs_gap_y_60">
                {roomData?.map((item, index) => (
                  <div className="col-xl-6 col-lg-12 col-md-6" key={index}>
                    <RoomCardStyle7 {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
