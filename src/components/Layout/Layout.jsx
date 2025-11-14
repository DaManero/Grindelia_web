import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import FooterStyle2 from "../Footer/FooterStyle2";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      const isInsideMain = (el) =>
        !!(
          el &&
          (el.closest(".booking-card") || el.closest(".booking-widget-area"))
        );

      // contenedores y divs del widget fuera del bloque principal
      document
        .querySelectorAll(
          '[id^="octorate-booking-widget"], [data-sitekey="8e3ffa8acec77e1b7347357712d940a3"]'
        )
        .forEach((el) => {
          if (!isInsideMain(el)) el.remove();
        });

      // iframes fallback fuera del bloque principal
      document
        .querySelectorAll('iframe[src*="booking-widget"]')
        .forEach((ifr) => {
          if (!isInsideMain(ifr)) ifr.remove();
        });
    } catch {
      /* silent */
    }
  }, [pathname]);

  return (
    <>
      <Header logoUrl="/images/logo.svg" variant="cs_transparent_header" />
      <Outlet />
      <FooterStyle2 />
    </>
  );
}
