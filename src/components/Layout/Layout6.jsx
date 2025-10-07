import { Outlet } from "react-router-dom";
import FooterStyle2 from "../Footer/FooterStyle2";
import HeaderStyle3 from "../Header/HeaderStyle3";

export default function Layout6() {
  return (
    <>
      <HeaderStyle3 logoUrl="/images/logo.svg" variant="cs_type_1" fullWidth />
      <Outlet />
      <FooterStyle2 />
    </>
  );
}
