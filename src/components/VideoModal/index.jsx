export default function VideoModal({ isTrue, iframeSrc, handelClose }) {
  return (
    <div className={`cs_video_popup ${isTrue === true ? 'active' : ''}`}>
      <div className="cs_video_popup-overlay"></div>
      <div className="cs_video_popup-content">
        <div className="cs_video_popup-layer"></div>
        <div className="cs_video_popup_container">
          <div className="cs_video_popup-align">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={iframeSrc}
                title="Video"
              ></iframe>
            </div>
          </div>
          <div className="cs_video_popup_close" onClick={handelClose}></div>
        </div>
      </div>
    </div>
  );
}
