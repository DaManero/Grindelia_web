import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';

export default function Layout10() {
  return (
    <>
      <Header logoUrl="/images/logo.svg" variant="cs_round_btn" fullWidth />
      <Outlet />
      <Footer />
    </>
  );
}
