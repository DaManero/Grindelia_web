import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const homePageMenu = [
  {
    title: "Default Hotel & Resort",
    imgUrl: "/images/demo/home-1.jpeg",
    linkUrl: "/",
  },
  {
    title: " Hotel & Resort V2",
    imgUrl: "/images/demo/home-2.jpeg",
    linkUrl: "/home-v2",
  },
  {
    title: "Hotel & Resort V3",
    imgUrl: "/images/demo/home-3.jpeg",
    linkUrl: "/home-v3",
  },
  {
    title: "Hotel & Resort V4",
    imgUrl: "/images/demo/home-4.jpeg",
    linkUrl: "/home-v4",
  },
  {
    title: "Hotel & Resort V5",
    imgUrl: "/images/demo/home-5.jpeg",
    linkUrl: "/home-v5",
  },
  {
    title: "Hotel & Resort V6",
    imgUrl: "/images/demo/home-6.jpeg",
    linkUrl: "/home-v6",
  },
  {
    title: "Hotel & Resort V7",
    imgUrl: "/images/demo/home-7.jpeg",
    linkUrl: "/home-v7",
  },
  {
    title: "Hotel & Resort V8",
    imgUrl: "/images/demo/home-8.jpeg",
    linkUrl: "/home-v8",
  },
  {
    title: "Hostel",
    imgUrl: "/images/demo/home-9.jpeg",
    linkUrl: "/home-v9",
  },
  {
    title: "Luxury Hotel",
    imgUrl: "/images/demo/home-10.jpeg",
    linkUrl: "/home-v10",
  },
];

const roomPageMenu = [
  {
    title: "Room Grid View",
    linkUrl: "/rooms",
  },
  {
    title: "Room List View",
    linkUrl: "/rooms-list-view",
  },
  {
    title: "Room Details V1",
    linkUrl: "/room/room-details",
  },
  {
    title: "Room Details V2",
    linkUrl: "/room/room-details-v2",
  },
  {
    title: "Room Details V3",
    linkUrl: "/room/room-details-v3",
  },
  {
    title: "Room Search Result",
    linkUrl: "/search-result",
  },
  {
    title: "Payment Page",
    linkUrl: "/complete-reservation",
  },
  {
    title: "Not Found Any Room",
    linkUrl: "/not-found-any-room",
  },
  {
    title: "Not Available Room",
    linkUrl: "/room/not-available-room",
  },
];

const pagesMenu = [
  {
    title: "Restaurant & Bar",
    linkUrl: "/restaurant",
  },
  {
    title: "SPA & Wellness",
    linkUrl: "/spa-wellness",
  },
  {
    title: "Infinity Pool",
    linkUrl: "/infinity-pool",
  },
  {
    title: "Team",
    linkUrl: "/team",
  },
  {
    title: "Gallery",
    linkUrl: "/gallery",
  },
  {
    title: "FAQ",
    linkUrl: "/faq",
  },
  {
    title: "Error 404",
    linkUrl: "/404",
  },
];

const blogMenu = [
  {
    title: "Sidebar Blog",
    linkUrl: "/blog",
  },
  {
    title: "Blog Grid View",
    linkUrl: "/blog-grid",
  },
  {
    title: "Blog List View",
    linkUrl: "/blog-list",
  },
  {
    title: "Blog Details",
    linkUrl: "/blog/blog-details",
  },
];

export default function Nav({ setMobileToggle, mobileToggle, variant }) {
  return (
    <nav className={variant ? variant : "cs_nav cs_fs_13 cs_semibold"}>
      <span
        className={
          mobileToggle ? "cs_menu_toggle cs_toggle_active" : "cs_menu_toggle"
        }
        onClick={() => {
          if (typeof setMobileToggle === "function")
            setMobileToggle(!mobileToggle);
        }}
      >
        <span></span>
      </span>

      <ul className={`cs_nav_list ${mobileToggle ? "cs_active" : ""}`}>
        <li>
          <Link to="/" className="cs_white_color">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/about" className="cs_white_color">
            Sobre Nosotros
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to="/rooms" className="cs_white_color">
            Habitaciones
          </Link>
          <DropDown>
            <ul>
              {roomPageMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.linkUrl}
                    onClick={() => setMobileToggle(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </DropDown>
        </li>
        <li>
          <Link to="/services" className="cs_white_color">
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="cs_white_color">
            Galería
          </Link>
        </li>
        <li>
          <Link to="/contact" className="cs_white_color">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
