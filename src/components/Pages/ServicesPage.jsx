import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import FeatureSection2 from '../Section/FeatureSection/FeatureSection2';
import Section from '../Section';
import VideoBlock from '../VideoBlock';
import NewsletterSection from '../Section/NewsletterSection';
import FacilitySection4 from '../Section/FacilitySection/FacilitySection4';
import FaqSection from '../Section/FaqSection';
import { pageTitle } from '../../helpers/PageTitle';

const featureData = [
  {
    iconUrl: '/images/icons/restaurant.svg',
    title: 'Restaurant & Bar',
    subTitle:
      'Exceptional dining awaits at our resort. Immerse yourself in exquisite flavors with view to match. Pure indulgence, effortlessly delivered.',
  },
  {
    iconUrl: '/images/icons/massage.svg',
    title: 'Spa & Wellness',
    subTitle:
      'Discover serenity at our spa. Indulge in blissful treatments and unwind in a haven of relaxation. Your path to rejuvenation starts here',
  },
  {
    iconUrl: '/images/icons/gym.svg',
    title: 'Fitness Center',
    subTitle:
      'Exceptional dining awaits at our resort. Immerse yourself in exquisite flavors with view to match. Pure indulgence, effortlessly delivered.',
  },
  {
    iconUrl: '/images/icons/swimmer.svg',
    title: 'Infinity Pool',
    subTitle:
      'Our Infinity Pool Escape. Surrender to breath taking views and pure relaxation as you soak in the serenity of our infinity pool.',
  },
  {
    iconUrl: '/images/icons/briefcase.svg',
    title: 'Conference Center',
    subTitle:
      'Stay productive with our well-equipped business event center, offering essential services for business travelers.',
  },
  {
    iconUrl: '/images/icons/router.svg',
    title: 'Wifi & Internet',
    subTitle:
      'Delight in the convenience of round-the-clock room service, catering, Laundry everything to your needs at any hour.',
  },
  {
    iconUrl: '/images/icons/taxi.svg',
    title: 'Airport Pick-up',
    subTitle:
      'Our Infinity Pool Escape. Surrender to breath taking views and pure relaxation as you soak in the serenity of our infinity pool.',
  },
  {
    iconUrl: '/images/icons/dryer.svg',
    title: 'Laundry Services',
    subTitle:
      'Delight in the convenience of round-the-clock room service, catering, Laundry everything to your needs at any hour.',
  },
  {
    iconUrl: '/images/icons/room-service.svg',
    title: '24/7 Room Service',
    subTitle:
      'Delight in the convenience of round-the-clock room service, catering, Laundry everything to your needs at any hour.',
  },
];

const facilityData = [
  {
    title: 'Casabelia Elegance, Savory Indulgence at Our Cuisine & Bar',
    subTitle: 'RESTAURANT & BAR',
    description:
      'Step into the refined world of Casabelia, where our restaurant and bar redefine the art of dining and socializing. Nestled within our luxurious resort, Casabelia offers a sophisticated culinary experience that transcends expectations.',
    imgUrl: '/images/feature_img_9.jpeg',
    videoUrl: 'https://www.youtube.com/embed/UJEUwEJ6gH4',
    btnText: 'Learn More',
    btnUrl: '/restaurant',
  },
  {
    title: 'Seapearl Meeting Oasis: Where Ideas Flourish',
    subTitle: 'CONFERENCE HALL',
    description: `Discover a space designed for success at Seapearl's Conference Room. Tailored for productivity and sophistication, our venue offers modern amenities, professional service, and an atmosphere that fosters innovation.`,
    imgUrl: '/images/feature_img_10.jpeg',
    videoUrl: 'https://www.youtube.com/embed/UJEUwEJ6gH4',
    btnText: 'Learn More',
    btnUrl: '/restaurant',
  },
];

const faqData = [
  {
    title: 'What are the check-in and check-out times at Seapearl?',
    content: 'Check-in time is at 3:00 PM, and check-out is at 11:00 AM.',
  },
  {
    title: 'Is parking available, and is there a fee?',
    content: 'Check-in time is at 3:00 PM, and check-out is at 11:00 AM.',
  },
  {
    title: 'Are pets allowed at Seapearl?',
    content: 'Check-in time is at 3:00 PM, and check-out is at 11:00 AM.',
  },
  {
    title: 'Is there a dress code for the restaurant?',
    content: 'Check-in time is at 3:00 PM, and check-out is at 11:00 AM.',
  },
  {
    title: 'Is Wi-Fi provided, and is it complimentary?',
    content: 'Check-in time is at 3:00 PM, and check-out is at 11:00 AM.',
  },
  {
    title: 'Do you have facilities for business meetings or events?',
    content: 'Check-in time is at 3:00 PM, and check-out is at 11:00 AM.',
  },
  {
    title: 'Is direct beach access available from the hotel?',
    content: 'Check-in time is at 3:00 PM, and check-out is at 11:00 AM.',
  },
];

export default function ServicesPage() {
  pageTitle('Our Services');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Services"
        bgImgUrl="/images/page_heading_bg_services.jpeg"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="145"
        bottomSpaceMd="75"
      >
        <FeatureSection2
          sectionTitle="Unveiling Unmatched Coastal <br />Luxury and Hospitality"
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
          videoBgUrl="/images/video_bg_8.jpeg"
          videoUrl="https://www.youtube.com/embed/UJEUwEJ6gH4"
          title="CASABALINA"
          variant="cs_color_1"
          playerStyle1
        />
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <FacilitySection4 data={facilityData} />
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
        className="cs_primary_bg"
        style={{ backgroundImage: `url(/images/newsletter_bg.jpeg)` }}
      >
        <NewsletterSection
          title="For Exclusive Offers and Updates Subscribe Our SeaPearl Newsletter!"
          variant="cs_color_2"
        />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
        className="cs_gray_bg"
      >
        <FaqSection
          sectionTitle="Explore Our Frequently Asked Questions"
          sectionSubTitle="FAQ’S"
          thumbUrl="/images/faq_img.jpeg"
          data={faqData}
        />
      </Section>
    </>
  );
}
