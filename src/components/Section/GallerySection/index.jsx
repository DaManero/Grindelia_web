import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import SectionHeading from '../../SectionHeading';
import GalleryCard from '../../GalleryCard';
import CustomCursor from '../../CustomCursor';

export default function GallerySection({
  sectionTitle,
  sectionSubTitle,
  variant = 'cs_grid_style_1',
  data,
}) {
  return (
    <>
      <div className="container">
        <SectionHeading
          sectionTitle={sectionTitle}
          sectionSubTitle={sectionSubTitle}
          bottomSpaceLg="80"
          bottomSpaceMd="50"
          variant="text-center"
        />
      </div>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={variant ? variant : 'cs_grid_style_1'}
      >
        {data?.map((item, index) => (
          <div className="cs_grid_item" href={item.imgUrl} key={index}>
            {variant === 'cs_grid_style_1' && <GalleryCard {...item} hover />}
            {variant === 'cs_grid_style_3' && (
              <CustomCursor variant="cs_style_2" text={item.title}>
                <GalleryCard {...item} />
              </CustomCursor>
            )}
          </div>
        ))}
      </LightGallery>
    </>
  );
}
