import React from "react";
import SocialMedia from "../Widgets/SocialMedia";
import FooterItem from "./FooterItem";
import FooterMenu from "../Widgets/FooterMenu";
import ScrollUp from "./ScrollUp";
import { Link } from "react-router-dom";
import ContactInfo from "../Widgets/ContactInfo";
import GoogleMap from "../Widgets/GoogleMap";
const menuData = [
  { title: "Inicio", href: "/" },
  { title: "Sobre Nosotros", href: "/about" },
  { title: "Habitaciones", href: "/rooms" },
  { title: "SPA & Bienestar", href: "/spa-wellness" },
  { title: "Usos múltiples", href: "/cowork" },
];
const menuData2 = [{ title: "Política de Privacidad y Cookies", href: "/" }];
const contactInfoData = {
  mobile: 'Call : <a href="tel:+54 9 2255505626">+54 9 2255 505626</a>',
  email:
    'Email : <a href="mailto:info@grindela.com.ar">info@grindela.com.ar</a>',
};
const contactInfoData2 = {
  address:
    "Calle 28 y Punta del Este, Mar de las Pampas, Buenos Aires, Argentina",
};

export default function FooterStyle2() {
  return (
    <footer className="cs_footer cs_primary_bg cs_ternary_color">
      <div className="cs_footer_main">
        <div className="container">
          <div className="cs_footer_grid_4">
            <FooterItem title="Contacto" titleVariant="cs_type_1">
              <ContactInfo data={contactInfoData} />
              <SocialMedia />
            </FooterItem>
            <FooterItem title="Dirección" titleVariant="cs_type_1">
              <ContactInfo data={contactInfoData2} />
            </FooterItem>
            <FooterItem title="Links" titleVariant="cs_type_1">
              <FooterMenu data={menuData} variant="cs_menu_widget" />
            </FooterItem>
            <FooterItem title="Localización" titleVariant="cs_type_1">
              <GoogleMap variant="cs_footer_map cs_primary_bg" />
            </FooterItem>
          </div>
        </div>
      </div>
      <div className="cs_bottom_footer_wrap">
        <div className="container">
          <div className="cs_bottom_footer position-relative">
            <div className="cs_copyright">
              Grindelia Copyright © 2025 <Link to="/">Grindelia</Link>
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
