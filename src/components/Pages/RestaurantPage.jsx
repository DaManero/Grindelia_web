import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import Section from '../Section';
import AboutSection8 from '../Section/AboutSection/AboutSection8';
import NewsletterSection from '../Section/NewsletterSection';
import FeatureSection7 from '../Section/FeatureSection/FeatureSection7';
import FacilitySection7 from '../Section/FacilitySection/FacilitySection7';
import { pageTitle } from '../../helpers/PageTitle';

const featureData = [
  {
    iconUrl: '/images/icons/mug-tea.svg',
    title: 'Breakfast',
    subTitle: `Join us for breakfast daily from <b>7:00 AM to 10:00 AM</b>. Delight in a variety of freshly prepared options to kickstart your day with energy and flavor.`,
  },
  {
    iconUrl: '/images/icons/restaurant.svg',
    title: 'Lunch',
    subTitle: `Join us for lunch daily from <b>12:00 PM to 3:00 PM</b>. Indulge in a variety of delicious options crafted with care and flavor to satisfy your midday cravings.`,
  },
  {
    iconUrl: '/images/icons/bowl-chopsticks-noodles.svg',
    title: 'Dinner',
    subTitle: `Join us for dinner daily from <b>6:00 PM to 10:00 PM</b>. Explore a menu of exquisite flavors crafted with seasonal ingredients to elevate your dining experience.`,
  },
];

const facilityData = [
  {
    imgUrl: '/images/restaurant_service_thumb_1.jpeg',
    title: 'Discover Culinary Excellence: Explore Our Menu',
    subTitle: 'DELICIOUS MENU',
    description: `Embark on a global culinary adventure at our restaurant, featuring Continental, Mexican, Seafood, Arabic, Thai, Chinese, Indian, and Bangladeshi delights. Plus, treat your little ones to our Children's Club menu.`,
  },
  {
    imgUrl: '/images/restaurant_service_thumb_2.jpeg',
    title: 'Sip & Savor: Discover Our Bar Experience',
    subTitle: 'LUXURY BAR',
    description: `Experience a symphony of flavors at our bar, where we offer an impressive selection of wine, gin, cocktails, and beer. Whether you're a wine connoisseur, gin enthusiast, cocktail aficionado, or simply craving a refreshing beer.`,
  },
];

export default function RestaurantPage() {
  pageTitle('Restaurant & Bar');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Restaurant & Bar"
        bgImgUrl="/images/page_heading_bg_restaurant.jpeg"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className="container-fluid p-0"
      >
        <AboutSection8
          sectionTitle="Our chefs prepare dishes with fresh, seasonal ingredients sourced locally, ensuring every meal is a perfect blend of tradition and flavor for your ultimate relaxation."
          sectionSubTitle="Dine in Elegance"
          marqueeText="WELCOME TO CASABALINA RESTAURANT & BAR"
          imgUrl1="/images/dine_img_1.jpeg"
          imgUrl2="/images/dine_img_2.jpeg"
          imgUrl3="/images/dine_img_3.jpeg"
        />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="140"
        bottomSpaceMd="70"
      >
        <FeatureSection7
          sectionTitle="Indulge in Culinary Delights at <br />Your Convenience"
          sectionSubTitle="Restaurant Hours"
          data={featureData}
        />
      </Section>
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className="container-fluid p-0"
      >
        <FacilitySection7 data={facilityData} />
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
