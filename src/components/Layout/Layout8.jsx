import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import FooterStyle2 from "../Footer/FooterStyle2";

export default function Layout8() {
  return (
    <>
      <Header logoUrl="/images/logo-black.svg" variant="cs_type_2" fullWidth />
      <Outlet />
      <FooterStyle2 />
    </>
  );
}
