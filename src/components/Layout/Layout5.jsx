import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';

export default function Layout5() {
  return (
    <>
      <Header logoUrl="/images/logo.svg" variant="cs_transparent_header" />
      <Outlet />
      <Footer />
    </>
  );
}
