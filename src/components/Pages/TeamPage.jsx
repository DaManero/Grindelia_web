import { useEffect } from 'react';
import PageHeadingSection from '../Section/PageHeadingSection';
import Section from '../Section';
import AuthorSection from '../Section/AuthorSection';
import TeamSection from '../Section/TeamSection';
import { pageTitle } from '../../helpers/PageTitle';

const authorData = {
  authorImgUrl: '/images/author.png',
  authorText:
    'SeaPearl was founded on the belief that every guest deserves to experience the perfect harmony of coastal elegance and unparalleled hospitality. We strive to create a sanctuary where relaxation meets sophistication, ensuring that every moment spent with us is a precious pearl in the tapestry of life.',
  authorSignUrl: '/images/signature.png',
  authorDesignation: 'Founder of SeaPearl',
};

const teamData = [
  {
    imgUrl: '/images/team_member_1.jpeg',
    name: 'John Williams',
    designation: 'Front Office Manager',
    socialLinks: [{ linkedin: '/', twitter: '/', youtube: '/', facebook: '/' }],
  },
  {
    imgUrl: '/images/team_member_2.jpeg',
    name: 'Sarah Smith',
    designation: 'General Manager',
    socialLinks: [{ linkedin: '/', twitter: '/', youtube: '/', facebook: '/' }],
  },
  {
    imgUrl: '/images/team_member_3.jpeg',
    name: 'Jessica Taylor',
    designation: 'Spa Manager',
    socialLinks: [{ linkedin: '/', twitter: '/', youtube: '/', facebook: '/' }],
  },
  {
    imgUrl: '/images/team_member_4.jpeg',
    name: 'Michael Anderson',
    designation: 'Head Chef',
    socialLinks: [{ linkedin: '/', twitter: '/', youtube: '/', facebook: '/' }],
  },
  {
    imgUrl: '/images/team_member_5.jpeg',
    name: 'Laura Davis',
    designation: 'Head Housekeeper',
    socialLinks: [{ linkedin: '/', twitter: '/', youtube: '/', facebook: '/' }],
  },
  {
    imgUrl: '/images/team_member_6.jpeg',
    name: 'Daniel Martinez',
    designation: 'Concierge Supervisor',
    socialLinks: [{ linkedin: '/', twitter: '/', youtube: '/', facebook: '/' }],
  },
];

export default function TeamPage() {
  pageTitle('Team Members');
  useEffect(() => {
    document.body.classList.remove('cs_dark');
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Our Team"
        bgImgUrl="/images/page_heading_bg_team.jpeg"
      />
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="140"
        bottomSpaceMd="75"
      >
        <AuthorSection data={authorData} />
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="140"
        bottomSpaceMd="75"
        className="cs_gray_bg"
      >
        <TeamSection
          sectionTitle="Our Dedicated Team: The <br />Heartbeat of Seapearl Resort"
          sectionSubTitle="HOTEL STAFFS"
          data={teamData}
        />
      </Section>
    </>
  );
}
