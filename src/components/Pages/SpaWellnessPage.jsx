import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import Section from '../Section';
import VideoBlock from '../VideoBlock';
import FacilitySection5 from '../Section/FacilitySection/FacilitySection5';
import ServiceSection5 from '../Section/ServiceSection/ServiceSection5';
import AboutSection9 from '../Section/AboutSection/AboutSection9';
import { pageTitle } from '../../helpers/PageTitle';

const serviceData = {
  imgUrl1: '/images/service_img_1.jpeg',
  imgUrl2: '/images/service_img_2.jpeg',
  title: `Explore Seapearl's Spa & Wellness Sanctuary`,
  subTitle: 'TRANQUILITY AWAITS',
  description: `Discover serenity at Seapearl's Spa & Wellness Sanctuary. Let our expert therapists pamper you with luxurious treatments, from massages to facials, in a tranquil setting designed to rejuvenate body and mind. Escape the everyday and find your bliss at Seapearl.`,
  contactList: [
    {
      iconUrl: '/images/icons/clock-three.svg',
      title: 'Opening Closing Hours',
      subTitle: '10:00 am - 8:00 pm',
    },
    {
      iconUrl: '/images/icons/contact_icon_3.svg',
      title: 'Call Us For Reservation',
      subTitle: '+21 454 451 2009',
    },
  ],
};

const facilityData = [
  {
    title: 'Massage Therapy',
    subTitle: `Relax and unwind with a variety of massage techniques, including Swedish, deep tissue, and hot stone massages.`,
    price: '$70',
    imgUrl: '/images/spa_facility_1.jpeg',
    href: '/restaurent',
  },
  {
    title: 'Body Treatments',
    subTitle: `Treat yourself to indulgent body scrubs, wraps, and polishes designed to nourish and renew your skin.`,
    price: '$90',
    imgUrl: '/images/spa_facility_2.jpeg',
    href: '/restaurent',
  },
  {
    title: 'Nutritional Counseling',
    subTitle: `Receive guidance on nutrition and healthy eating habits from our experienced wellness doctors professionals.`,
    price: '$110',
    imgUrl: '/images/spa_facility_3.jpeg',
    href: '/restaurent',
  },
  {
    title: 'Holistic Therapies',
    subTitle: `Explore holistic healing modalities such as acupuncture, Reiki, and reflexology to restore balance and vitality.`,
    price: '$150',
    imgUrl: '/images/spa_facility_4.jpeg',
    href: '/restaurent',
  },
];

const aboutData = {
  imgUrl: '/images/about_us_3.jpeg',
  title: 'Meet Our Tranquility Guides',
  subTitle: 'SPA WELLNESS EXPERTS',
  description: `At Seapearl, our spa trainers are dedicated to empowering your wellness journey. With expertise in various holistic modalities and a passion for promoting well-being, they guide you on a path to rejuvenation and vitality. From personalized fitness programs to mindfulness techniques and nutritional advice, our spa trainers tailor their approach to meet your individual needs. <br /> <br /> Whether you're seeking to improve your physical fitness, reduce stress, or enhance your overall wellness, our knowledgeable and supportive spa trainers are here to inspire and motivate you every step of the way`,
  btnText: 'Contact Us',
  btnUrl: '/contact',
};

export default function SpaWellnessPage() {
  pageTitle('Spa & Wellness');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
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
          sectionTitle="Escape and Renew: Discover <br />Seapearl's Spa Sanctuary"
          sectionSubTitle="SPA FACILITIES"
          data={facilityData}
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
    </>
  );
}
