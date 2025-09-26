import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import Section from '../Section';
import ButtonStyle2 from '../../components/Button/ButtonStyle2';
import { pageTitle } from '../../helpers/PageTitle';

export default function NotFound() {
  pageTitle('Error 404');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Page not found"
        bgImgUrl="/images/page_heading_bg_gallery.jpeg"
      />
      <Section
        topSpaceLg="130"
        topSpaceMd="70"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <div className="container">
          <div className="cs_error text-center">
            <h2 className="cs_fs_120 cs_accent_color cs_fs_150 cs_mb_18">
              404
            </h2>
            <h2 className="cs_fs_67 cs_mb_18">Oops! Page Not Found!</h2>
            <p className="cs_mb_25">
              Sorry, the page you're seeking isn't here. It could have been
              relocated or removed
            </p>
            <ButtonStyle2
              btnUrl="/"
              btnText="Return Home"
              variant="cs_radius_20 cs_accent_btn"
              icon
            />
          </div>
        </div>
      </Section>
    </>
  );
}
