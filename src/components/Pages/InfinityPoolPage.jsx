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
    iconUrl: '/images/icons/swimmer.svg',
    title: 'Family-Friendly',
    subTitle: `From shallow wading areas for young children to exhilarating water slides and splash pads, family-friendly pool facilities ensure that guests of all.`,
  },
  {
    iconUrl: '/images/icons/dryer.svg',
    title: 'Adults-Only',
    subTitle: `For those seeking peace and tranquility, adults-only pool areas provide a serene escape from the hustle and bustle, complete with luxurious loungers.`,
  },
  {
    iconUrl: '/images/icons/massage.svg',
    title: 'Wellness and Fitness',
    subTitle: `Many properties incorporate wellness elements into their pool facilities, such as lap lanes for swimming enthusiasts, hydrotherapy jets for relaxation.`,
  },
];

const facilityData = [
  {
    imgUrl: '/images/pool_service_thumb_1.jpeg',
    title: 'Design of a pool is paramount to its appeal, with factors',
    subTitle: 'LUXURIOUS DESIGN POOL',
    description: `The design of a pool is paramount to its appeal, with factors such as size, shape, and surroundings playing a crucial role in creating the desired atmosphere. Whether it's a sleek infinity pool overlooking the ocean, a family-friendly lagoon with waterslides and waterfalls, or a serene adults-only retreat.`,
  },
  {
    imgUrl: '/images/pool_service_thumb_2.jpeg',
    title: 'Casual poolside bar serving refreshing cocktails',
    subTitle: 'POOLSIDE DINING',
    description: `Whether it's a casual poolside bar serving refreshing cocktails and light bites or a gourmet restaurant overlooking the water, dining options add an extra layer of indulgence to the pool experience.`,
  },
];

export default function InfinityPoolPage() {
  pageTitle('Infinity Pool');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Infinity Pool"
        bgImgUrl="/images/page_heading_bg_infinity_pool.jpeg"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className="container-fluid p-0"
      >
        <AboutSection8
          sectionTitle="In the realm of hospitality, the pool isn't just a recreational amenity—it's a focal point of relaxation, socialization, and luxury."
          sectionSubTitle="ELEVATING POOL FACILITIES"
          marqueeText="WELCOME TO CASABALINA RESTAURANT & BAR"
          imgUrl1="/images/pool_img_1.jpeg"
          imgUrl2="/images/pool_img_2.jpeg"
          imgUrl3="/images/pool_img_3.jpeg"
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
          sectionSubTitle="FACILITIES YOU MAY LIKE"
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
