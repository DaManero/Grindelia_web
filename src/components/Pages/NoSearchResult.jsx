import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import AvailabilityForm from '../Forms/AvailabilityForm';
import RoomCardStyle7 from '../RoomCard/RoomCardStyle7';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';

export default function NoSearchResult() {
  pageTitle('Search Result');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Room Search Results"
        bgImgUrl="/images/page_heading_bg_rooms.jpeg"
        variant="cs_size_2"
      />
      <Section
        topSpaceLg="100"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-4">
              <AvailabilityForm variant=" cs_type_6 cs_sticky_top_100" />
            </div>
            <div className="col-lg-8">
              <div className="cs_nothing_found cs_center text-center cs_radius_5">
                😞 Whoops, nothing found
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
