import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import Section from "../Section";
import FaqSection from "../Section/FaqSection";
import ContactSection4 from "../Section/ContactSection/ContactSection4";
import { pageTitle } from "../../helpers/PageTitle";

const faqData = [
  {
    title: "What are the check-in and check-out times at Seapearl?",
    content: "Check-in time is at 3:00 PM, and check-out is at 11:00 AM.",
  },
  {
    title: "Is parking available, and is there a fee?",
    content: "Check-in time is at 3:00 PM, and check-out is at 11:00 AM.",
  },
  {
    title: "Are pets allowed at Seapearl?",
    content: "Check-in time is at 3:00 PM, and check-out is at 11:00 AM.",
  },
  {
    title: "¿Hay algún código de vestimenta para el coworking?",
    content: "Check-in time is at 3:00 PM, and check-out is at 11:00 AM.",
  },
  {
    title: "Is Wi-Fi provided, and is it complimentary?",
    content: "Check-in time is at 3:00 PM, and check-out is at 11:00 AM.",
  },
  {
    title: "Do you have facilities for business meetings or events?",
    content: "Check-in time is at 3:00 PM, and check-out is at 11:00 AM.",
  },
  {
    title: "Is direct beach access available from the hotel?",
    content: "Check-in time is at 3:00 PM, and check-out is at 11:00 AM.",
  },
];

const contactData = [
  {
    iconUrl: "/images/icons/contact_icon_3.svg",
    title: "For Reservation",
    subTitle: '<a href="tel:+214544512009">+21 454 451 2009</a>',
  },
];

export default function FaqPage() {
  pageTitle("FAQ");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="FAQ"
        bgImgUrl="/images/page_heading_bg_faq.jpeg"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <FaqSection thumbUrl="/images/faq_img.jpeg" data={faqData} />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
        className="cs_gray_bg"
      >
        <ContactSection4
          sectionTitle="Contact Seapearl Resort Today"
          sectionSubTitle="GETTING TOUCH"
          sectionDescription="Reach out to us via phone, email, or through our convenient online form. We look forward to hearing from you and helping you plan your unforgettable experience at Seapearl Resort."
          data={contactData}
        />
      </Section>
    </>
  );
}
