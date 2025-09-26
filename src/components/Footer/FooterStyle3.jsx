import React from "react";
import SocialMedia from "../Widgets/SocialMedia";
import FooterItem from "./FooterItem";
import FooterMenu from "../Widgets/FooterMenu";
import ScrollUp from "./ScrollUp";
import { Link } from "react-router-dom";
import ContactInfo from "../Widgets/ContactInfo";
import Newsletter from "../Newsletter";
const menuData = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Booking", href: "/rooms" },
  { title: "SPA & Wellness", href: "/spa-wellness" },
  { title: "Restaurant", href: "/restaurant" },
  { title: "News & Media", href: "/blog" },
];
const menuData2 = [{ title: "Privacy & Cookie Policy", href: "/" }];
const contactInfoData = {
  mobile: 'Call : <a href="tel:+00(244)14-50-774">+00(244)14-50-774</a>',
  email: 'Email : <a href="mailto:info@oceanpearl.com">info@oceanpearl.com</a>',
  openingHour: "We are open 24/7",
};
const contactInfoData2 = {
  address: "452 15h Street, Office 741, Ohio, De 47754, USA",
};

export default function FooterStyle3() {
  return (
    <footer className="cs_footer cs_primary_bg cs_ternary_color">
      <div className="cs_footer_main">
        <div className="container">
          <div className="cs_footer_grid_4">
            <FooterItem title="Contact Us" titleVariant="cs_type_1">
              <ContactInfo data={contactInfoData} />
              <SocialMedia />
            </FooterItem>
            <FooterItem title="Address" titleVariant="cs_type_1">
              <ContactInfo data={contactInfoData2} />
            </FooterItem>
            <FooterItem title="Links" titleVariant="cs_type_1">
              <FooterMenu data={menuData} variant="cs_menu_widget" />
            </FooterItem>
            <FooterItem title="Subscribe" titleVariant="cs_type_1">
              <Newsletter
                variant="cs_color_1"
                text="Stay In the Loop & unlock exclusive Experiences. Subscribe for Exclusive Updates and Offers!"
              />
            </FooterItem>
          </div>
        </div>
      </div>
      <div className="cs_bottom_footer_wrap">
        <div className="container">
          <div className="cs_bottom_footer position-relative">
            <div className="cs_copyright">
              OceanPearl Copyright © 2025 <Link to="/">SeaPearl</Link>
            </div>
            <ScrollUp />
            <div className="cs_bottom_footer_right">
              <FooterMenu data={menuData2} variant="cs_footer_links" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
