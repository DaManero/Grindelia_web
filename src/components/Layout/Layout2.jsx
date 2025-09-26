import { Outlet } from 'react-router-dom';
import FooterStyle3 from '../Footer/FooterStyle3';
import HeaderStyle2 from '../Header/HeaderStyle2';

export default function Layout2() {
  return (
    <>
      <HeaderStyle2 logoUrl="/images/logo.svg" />
      <Outlet />
      <FooterStyle3 />
    </>
  );
}
