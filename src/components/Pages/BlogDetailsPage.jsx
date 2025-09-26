import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import BlogSidebar from '../BlogSidebar';
import BlogDetails from '../BlogDetails';
import Spacing from '../Spacing';
import BlogShare from '../BlogShare';
import BlogReply from '../BlogReply';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';

export default function BlogDetailsPage() {
  pageTitle('Blog Details');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Blog Details"
        bgImgUrl="/images/page_heading_bg_blog.jpeg"
      />
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <div className="container">
          <div className="row cs_gap_y_lg_80">
            <div className="col-lg-8">
              <BlogDetails />
              <Spacing lg="45" md="45" />
              <BlogShare />
              <Spacing lg="100" md="60" />
              <BlogReply
                title="Leave A Reply"
                subTitle="Your email address will not be published. Required fields are marked *"
              />
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
