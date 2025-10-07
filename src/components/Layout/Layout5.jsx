import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import FooterStyle2 from "../Footer/FooterStyle2";

export default function Layout5() {
  return (
    <>
      <Header logoUrl="/images/logo.svg" variant="cs_transparent_header" />
      <Outlet />
      <FooterStyle2 />
    </>
  );
}
