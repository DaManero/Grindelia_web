import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import BlogSidebar from "../BlogSidebar";
import BlogSection8 from "../Section/BlogSection/BlogSection8";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";

const blogData = [
  {
    imgUrl: "/images/post_thumb_25.jpeg",
    postedBy: "Jenifar",
    date: "3 Aug 2025",
    comments: "19 Comments",
    title: "A Journey into Our Luxurious Resort",
    subTitle: `Nestled amidst the tranquil coastal surroundings of Seapearl Resort lies a sanctuary of serenity and rejuvenation – our luxurious spa. In this blog, we'll take you on a journey through the ultimate relaxation experience, highlighting the exquisite treatments and wellness rituals that await you at Seapearl's Spa...`,
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
    videoUrl: "",
  },
  {
    imgUrl: "/images/post_thumb_26.jpeg",
    postedBy: "Jenifar",
    date: "2 Aug 2025",
    comments: "12 Comments",
    title: "Exquisite Dining Experiences at Our Resort",
    subTitle: `Nestled amidst the tranquil coastal surroundings of Seapearl Resort lies a sanctuary of serenity and rejuvenation – our luxurious spa. In this blog, we'll take you on a journey through the ultimate relaxation experience, highlighting the exquisite treatments and wellness rituals that await you at Seapearl's Spa...`,
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
    videoUrl: "",
  },
  {
    imgUrl: "/images/post_thumb_27.jpeg",
    postedBy: "Jenifar",
    date: "20 July 2025",
    comments: "40 Comments",
    title: "Rejuvenation Secrets from Our Spa",
    subTitle: `Nestled amidst the tranquil coastal surroundings of Seapearl Resort lies a sanctuary of serenity and rejuvenation – our luxurious spa. In this blog, we'll take you on a journey through the ultimate relaxation experience, highlighting the exquisite treatments and wellness rituals that await you at Seapearl's Spa...`,
    btnText: "Learn More",
    btnUrl: "/blog/blog-details",
    videoUrl: "https://www.youtube.com/embed/UJEUwEJ6gH4",
  },
];

export default function BlogList() {
  pageTitle("Blog List");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="Blog List"
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
              <BlogSection8 data={blogData} />
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
