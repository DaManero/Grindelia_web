export default function PageHeadingSection({ bgImgUrl, title, variant }) {
  return (
    <section
      className={`cs_page_heading cs_primary_bg cs_bg_filed cs_center ${
        variant ? variant : ''
      }`}
      style={{ backgroundImage: `url('${bgImgUrl}')` }}
    >
      <div className="container">
        <h1
          className={`cs_white_color text-center mb-0 ${
            variant === 'cs_size_1' ? 'cs_fs_50' : 'cs_fs_67'
          }`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
