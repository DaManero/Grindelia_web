import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';

export default function Layout8() {
  return (
    <>
      <Header logoUrl="/images/logo-black.svg" variant="cs_type_2" fullWidth />
      <Outlet />
      <Footer fullWidth />
    </>
  );
}
