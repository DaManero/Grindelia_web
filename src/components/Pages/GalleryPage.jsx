import { useEffect, useState } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import GallerySection4 from "../Section/GallerySection/GallerySection4";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";

const galleryData = [
  {
    imgUrl: "/images/gallery_9.jpeg",
    title: "Vista al mar",
    category: "Pileta",
  },
  {
    imgUrl: "/images/gallery_10.jpeg",
    title: "Cowork",
    category: "Cowork",
  },
  { imgUrl: "/images/gallery_11.jpeg", title: "Relax", category: "Spa" },
  {
    imgUrl: "/images/gallery_12.jpeg",
    title: "Vista del hotel",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/gallery_13.jpeg",
    title: "Vista al mar",
    category: "Pileta",
  },
  {
    imgUrl: "/images/gallery_14.jpeg",
    title: "Espacios verdes",
    category: "Espacios Verdes",
  },
  {
    imgUrl: "/images/gallery_15.jpeg",
    title: "Cowork",
    category: "Cowork",
  },
  { imgUrl: "/images/gallery_16.jpeg", title: "Relax", category: "Spa" },
];

export default function GalleryPage() {
  pageTitle("Galería");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);

  const categories = [
    "Todas",
    "Habitaciones",
    "Pileta",
    "Espacios Verdes",
    "Cowork",
    "Spa",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredData =
    selectedCategory === "Todas"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <PageHeadingSection
        title="Galería Grindelia"
        bgImgUrl="/images/page_heading_bg_gallery.jpeg"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        {/* Mostrar el título usando GallerySection4 sin imágenes */}
        <GallerySection4
          sectionTitle="Descubrí la galería de fotos de Grindelia"
          sectionSubTitle="GALERÍA DE FOTOS"
          data={[]}
        />

        {/* Filtros (debajo del título, encima de las fotos) */}
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

        {/* Galería: título vacío para evitar duplicados, pasar los items filtrados */}
        <GallerySection4
          sectionTitle="" // título ya mostrado arriba
          sectionSubTitle=""
          data={filteredData}
        />
      </Section>
    </>
  );
}
