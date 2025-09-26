import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';

export default function Layout9() {
  return (
    <>
      <Header
        logoUrl="/images/logo-black.svg"
        variant="cs_type_1 cs_round_btn"
        fullWidth
      />
      <Outlet />
      <Footer />
    </>
  );
}
