import { useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import GallerySection4 from "../Section/GallerySection/GallerySection4";
import Section from "../Section";
import Spacing from "../Spacing";
import { pageTitle } from "../../helpers/PageTitle";

const galleryData = [
  { imgUrl: "/images/gallery_9.jpeg", title: "Beach View" },
  { imgUrl: "/images/gallery_10.jpeg", title: "Cowork View" },
  { imgUrl: "/images/gallery_11.jpeg", title: "Relax View" },
  { imgUrl: "/images/gallery_12.jpeg", title: "Hotel View" },
  { imgUrl: "/images/gallery_13.jpeg", title: "Beach View" },
  { imgUrl: "/images/gallery_14.jpeg", title: "Beach View" },
  { imgUrl: "/images/gallery_15.jpeg", title: "Cowork View" },
  { imgUrl: "/images/gallery_16.jpeg", title: "Relax View" },
];

export default function GalleryPage() {
  pageTitle("Gallery");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <PageHeadingSection
        title="SeaPearl Gallery"
        bgImgUrl="/images/page_heading_bg_gallery.jpeg"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <GallerySection4
          sectionTitle="Capturing Memories: Explore <br />the Seapearl Gallery"
          sectionSubTitle="PHOTO GALLERY"
          data={galleryData}
        />
        <div className="text-center">
          <Spacing lg="80" md="50" />
          <button className="cs_btn cs_style_2 cs_primary_btn cs_medium cs_radius_20 cs_fs_15">
            Learn More
          </button>
        </div>
      </Section>
    </>
  );
}
