import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import Section from "../Section";
import BlogSection6 from "../Section/BlogSection/BlogSection6";
import { pageTitle } from "../../helpers/PageTitle";

const blogData = [
  {
    imgUrl: "/images/post_thumb_16.jpeg",
    postedBy: "Jenifar",
    date: "23 Aug 2025",
    title: "A Journey into Our Luxurious Resort",
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_17.jpeg",
    postedBy: "Jenifar",
    date: "22 Aug 2025",
    title: "Exquisite Dining Experiences at Our Resort",
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_18.jpeg",
    postedBy: "Jenifar",
    date: "20 July 2025",
    title: "Rejuvenation Secrets from Our Spa",
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_19.jpeg",
    postedBy: "Jenifar",
    date: "15 Aug 2025",
    title: "A Journey into Our Luxurious Resort",
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_20.jpeg",
    postedBy: "Jenifar",
    date: "12 Aug 2025",
    title: "Exquisite Dining Experiences at Our Resort",
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_21.jpeg",
    postedBy: "Jenifar",
    date: "9 Aug 2025",
    title: "Rejuvenation Secrets from Our Spa",
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_22.jpeg",
    postedBy: "Jenifar",
    date: "6 Aug 2025",
    title: "A Journey into Our Luxurious Resort",
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_23.jpeg",
    postedBy: "Jenifar",
    date: "4 Aug 2025",
    title: "Exquisite Dining Experiences at Our Resort",
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_thumb_24.jpeg",
    postedBy: "Jenifar",
    date: "1 Aug 2025",
    title: "Rejuvenation Secrets from Our Spa",
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
  },
];

export default function BlogGridPage() {
  pageTitle("Blog Grid");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Blog Grid"
        bgImgUrl="/images/page_heading_bg_blog.jpeg"
      />
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <BlogSection6 data={blogData} fullWidth={false} />
      </Section>
    </>
  );
}
