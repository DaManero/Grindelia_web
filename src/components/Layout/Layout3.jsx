import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import FooterStyle4 from '../Footer/FooterStyle4';

export default function Layout3() {
  return (
    <>
      <Header logoUrl="/images/logo.svg" />
      <Outlet />
      <FooterStyle4 />
    </>
  );
}
