import React from "react";
import SocialMedia from "../Widgets/SocialMedia";
import Newsletter from "../Newsletter";
import FooterMenu from "../Widgets/FooterMenu";
import TextWidget from "../Widgets/TextWidget";
import ContactInfo from "../Widgets/ContactInfo";
import ScrollUp from "./ScrollUp";
import FooterItem from "./FooterItem";
import { Link } from "react-router-dom";
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
  address: "452 15h Street, Office 741, Ohio, De 47754, USA",
  mobile: 'Call : <a href="tel:+00(244)14-50-774">+00(244)14-50-774</a>',
  email: 'Email : <a href="mailto:info@grindela.com">info@grindela.com</a>',
};
export default function Footer({ fullWidth }) {
  return (
    <footer className="cs_footer cs_primary_bg cs_ternary_color">
      <div className="cs_footer_main">
        <div className={fullWidth ? "container-fluid cs_plr_100" : "container"}>
          <div
            className={
              fullWidth ? "cs_footer_grid_4 cs_type_1" : "cs_footer_grid_4"
            }
          >
            <FooterItem>
              <TextWidget
                logoUrl="/images/footer-logo.svg"
                text="Welcome to Seapearl, where coastal luxury meets unparallel hospitality."
              />
            </FooterItem>
            <FooterItem title="Contact Us">
              <ContactInfo data={contactInfoData} />
            </FooterItem>
            <FooterItem title="Links">
              <FooterMenu data={menuData} variant="cs_menu_widget" />
            </FooterItem>
            <FooterItem title="Subscribe">
              <Newsletter
                variant="cs_color_1"
                text="Stay In the Loop & unlock exclusive Experiences. Subscribe for Exclusive Updates and Offers!"
              />
              <SocialMedia />
            </FooterItem>
          </div>
        </div>
      </div>
      <div className="cs_bottom_footer_wrap">
        <div className={fullWidth ? "container-fluid cs_plr_100" : "container"}>
          <div className="cs_bottom_footer position-relative">
            <div className="cs_copyright">
              OceanPearl Copyright © 2025 <Link to="/">SeaPearl</Link>
            </div>
            <ScrollUp variant="cs_type_1" />
            <div className="cs_bottom_footer_right">
              <FooterMenu data={menuData2} variant="cs_footer_links" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
