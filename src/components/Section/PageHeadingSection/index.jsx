export default function PageHeadingSection({ bgImgUrl, title, variant }) {
  return (
    <section
      className={`cs_page_heading cs_primary_bg cs_bg_filed cs_center ${
        variant ? variant : ""
      }`}
      style={{ backgroundImage: `url('${bgImgUrl}')`, position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.45)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <h1
          className={`cs_white_color text-center mb-0 ${
            variant === "cs_size_1" ? "cs_fs_50" : "cs_fs_67"
          }`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
