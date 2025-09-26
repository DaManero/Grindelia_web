import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import AboutSection4 from '../Section/AboutSection/AboutSection4';
import Section from '../Section';
import FeatureSection6 from '../Section/FeatureSection/FeatureSection6';
import VideoBlock from '../VideoBlock';
import ServiceSection4 from '../Section/ServiceSection/ServiceSection4';
import TestimonialSection from '../Section/TestimonialSection';
import NewsletterSection from '../Section/NewsletterSection';
import { pageTitle } from '../../helpers/PageTitle';

const aboutData = {
  title:
    'Curated to match your preferences and desires, our selection includes luxury resorts, exclusive tours, and transfers for an unparalleled experience',
  subTitle: 'ABOUT US',
  imgUrl: '/images/about_us_1.jpeg',
  featureList: [
    {
      title: 'Client Satisfaction',
      value: '100%',
    },
    {
      title: 'Wining Awards',
      value: '03+',
    },
    {
      title: 'Pro Team Members',
      value: '25+',
    },
  ],
};

const featureData = [
  {
    itemNumber: '01',
    title: 'Unmatched Coastal Beauty',
    subTitle:
      'Located in a picturesque setting, Seapearl offers breathtaking views and direct beach access, providing guests with a serene and rejuvenating escape.',
  },
  {
    itemNumber: '02',
    title: 'Luxurious Accommodations',
    subTitle:
      'Our resort boasts opulent rooms and suites, meticulously designed to provide comfort, style, and relaxation, ensuring a memorable stay for every guest.',
  },
  {
    itemNumber: '03',
    title: 'World-Class Amenities',
    subTitle:
      'Seapearl offers a range of amenities for every guest, including a spa, fitness center, infinity pool, and conference facilities, ensuring a well-rounded experience.',
  },
  {
    itemNumber: '04',
    title: 'Impeccable Service',
    subTitle:
      'Our dedicated staff is committed to providing personalized service and ensuring that every aspect of your stay exceeds expectations, from check-in to check-out.',
  },
  {
    itemNumber: '05',
    title: 'Seamless Event Planning',
    subTitle: `Whether you're hosting a corporate event, wedding, or special celebration, our experienced event planning team will work closely with you to create a flawless and unforgettable experience.`,
  },
  {
    itemNumber: '06',
    title: 'Exceptional Value',
    subTitle:
      'With competitive rates and special packages, Seapearl provides exceptional value for guests seeking luxury accommodations and unparalleled experiences.',
  },
];

const serviceData = [
  {
    title: 'Luxury Accommodations',
    imgUrl: '/images/service_img_6.jpeg',
    href: '',
  },
  {
    title: 'Casabalina Restaurant',
    imgUrl: '/images/service_img_7.jpeg',
    href: '',
  },
  {
    title: 'Business and Event Facilities',
    imgUrl: '/images/service_img_8.jpeg',
    href: '',
  },
  {
    title: 'SeaPearl Spa and Wellness',
    imgUrl: '/images/service_img_9.jpeg',
    href: '',
  },
  { title: 'Infinity Pool', imgUrl: '/images/service_img_10.jpeg', href: '' },
  {
    title: '24-Hour Reception and Security',
    imgUrl: '/images/service_img_9.jpeg',
    href: '',
  },
];

const testimonialData = [
  {
    avatarImgUrl: '/images/avatar_1.png',
    avatarName: 'Angrew Bolar',
    avatarDesignation: 'Hotel Guest',
    avatarText:
      'Exceptional resort! From the exquisite dining to the serene spa and the  captivating infinity pool, every moment was pure bliss. Impeccable  service and breathtaking views – a perfect escape!',
    avatarReview: 5,
  },
  {
    avatarImgUrl: '/images/avatar_2.png',
    avatarName: 'Cecilia Brooks',
    avatarDesignation: 'Hotel Guest',
    avatarText:
      'Exceptional resort! From the exquisite dining to the serene spa and the  captivating infinity pool, every moment was pure bliss. Impeccable  service and breathtaking views – a perfect escape!',
    avatarReview: 4.5,
  },
  {
    avatarImgUrl: '/images/avatar_3.png',
    avatarName: 'Carlo Basile',
    avatarDesignation: 'VIP Guest',
    avatarText:
      'Exceptional resort! From the exquisite dining to the serene spa and the  captivating infinity pool, every moment was pure bliss. Impeccable  service and breathtaking views – a perfect escape!',
    avatarReview: 5,
  },
];

export default function AboutPage() {
  pageTitle('About Us');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
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
          sectionTitle="Unveiling Unmatched Coastal Luxury and Hospitality"
          sectionSubTitle="Why CHOOSE SEAPEARL"
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
