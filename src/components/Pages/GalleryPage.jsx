import { useEffect, useState } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import GallerySection4 from "../Section/GallerySection/GallerySection4";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";

const galleryData = [
  // Todas las imágenes deben existir en /public/images con tamaño 832x930
  {
    imgUrl: "/images/gallery_01.webp",
    title: "Suites",
    category: "Pileta",
  },
  {
    imgUrl: "/images/gallery_02.webp",
    title: "Suites",
    category: "Cowork",
  },
  {
    imgUrl: "/images/gallery_03.webp",
    title: "Suites",
    category: "Spa",
  },
  {
    imgUrl: "/images/gallery_04.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/gallery_05.webp",
    title: "Suites",
    category: "Pileta",
  },
  {
    imgUrl: "/images/gallery_06.webp",
    title: "Suites",
    category: "Espacios Verdes",
  },
  {
    imgUrl: "/images/gallery_07.webp",
    title: "Suites",
    category: "Cowork",
  },
  {
    imgUrl: "/images/gallery_08.webp",
    title: "Suites",
    category: "Spa",
  },
  {
    imgUrl: "/images/gallery_09.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/gallery_10.webp",
    title: "Suites",
    category: "Pileta",
  },
  {
    imgUrl: "/images/gallery_11.webp",
    title: "Suites",
    category: "Espacios Verdes",
  },
  {
    imgUrl: "/images/gallery_12.webp",
    title: "Suites",
    category: "Cowork",
  },
  {
    imgUrl: "/images/gallery_13.webp",
    title: "Suites",
    category: "Spa",
  },
  {
    imgUrl: "/images/gallery_14.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/gallery_15.webp",
    title: "Suites",
    category: "Pileta",
  },
  {
    imgUrl: "/images/gallery_16.webp",
    title: "Balcones Suites",
    category: "Espacios Verdes",
  },
  {
    imgUrl: "/images/gallery_17.webp",
    title: "Espacios de trabajo y relax",
    category: "Cowork",
  },
  {
    imgUrl: "/images/gallery_18.webp",
    title: "Spa & Bienestar",
    category: "Spa",
  },
];

export default function GalleryPage() {
  pageTitle("Galería");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);

  const filtersEnabled = false; // deshabilita filtros momentáneamente

  const categories = [
    "Todas",
    "Habitaciones",
    "Pileta",
    "Espacios Verdes",
    "Cowork",
    "Spa",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredData = filtersEnabled
    ? selectedCategory === "Todas"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory)
    : galleryData;

  return (
    <>
      <PageHeadingSection
        title="Galería Grindelia"
        bgImgUrl="/images/page_heading_gallery_bg.webp"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <GallerySection4
          sectionTitle="Descubrí la galería de fotos de Grindelia"
          sectionSubTitle="GALERÍA DE FOTOS"
          data={[]}
        />

        {filtersEnabled && (
          <div
            style={{
              marginBottom: 24,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={
                  "cs_btn cs_style_2 cs_medium cs_fs_15 cs_radius_5" +
                  (selectedCategory === cat ? " cs_active" : "")
                }
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <GallerySection4
          sectionTitle=""
          sectionSubTitle=""
          data={filteredData}
        />
      </Section>
    </>
  );
}
