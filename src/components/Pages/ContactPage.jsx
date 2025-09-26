import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import Section from '../Section';
import ContactSection3 from '../Section/ContactSection/ContactSection3';
import GoogleMap from '../Widgets/GoogleMap';
import { pageTitle } from '../../helpers/PageTitle';

const contactData = [
  {
    iconUrl: '/images/icons/contact_icon_1.svg',
    title: 'SeaPearl Address',
    subTitle: '452 15h Street, Office 741, <br>Ohio, De 47754, USA',
  },
  {
    iconUrl: '/images/icons/contact_icon_2.svg',
    title: 'Email address',
    subTitle: '<a href="mailto:info@seapearl.com">info@seapearl.com</a>',
  },
  {
    iconUrl: '/images/icons/contact_icon_3.svg',
    title: 'For Reservation',
    subTitle: '<a href="tel:+214544512009">+21 454 451 2009</a>',
  },
];

export default function ContactPage() {
  pageTitle('Contact');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Contact us"
        bgImgUrl="/images/page_heading_bg_gallery.jpeg"
      />
      <Section
        topSpaceLg="150"
        topSpaceMd="72"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <ContactSection3
          sectionTitle="Contact Seapearl Resort Today"
          sectionSubTitle="GETTING TOUCH"
          sectionDescription="Reach out to us via phone, email, or through our convenient online form. We look forward to hearing from you and helping you plan your unforgettable experience at Seapearl Resort."
          data={contactData}
          contactThumb="/images/contact_img.jpeg"
        />
      </Section>
      <GoogleMap variant="cs_google_map cs_style_1" />
    </>
  );
}
