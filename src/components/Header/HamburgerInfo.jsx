import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../Widgets/SocialMedia';

export default function HamburgerInfo() {
  return (
    <div className="cs_hamburger_header_info">
      <div className="cs_hamburger_header_info_in">
        <img
          src="/images/hamburger_img.png"
          alt="Hamburger"
          className="cs_hamburger_header_img cs_mb_80"
        />
        <div className="row">
          <div className="col-lg-6">
            <div className="cs_hamburger_contact_info">
              <h3 className="cs_fs_28 cs_white_color cs_mb_14">Contact</h3>
              <p className="cs_ternary_color cs_mb_19">
                Call : +00(244)14-50-774 <br />
                Email : info@seapearl.com
              </p>
              <SocialMedia />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_hamburger_contact_info">
              <h3 className="cs_fs_28 cs_white_color cs_mb_14">Location</h3>
              <p className="cs_ternary_color cs_mb_16">
                452 15h Street, Office 741, Ohio, De 47754, USA
              </p>
              <Link
                to="/contact"
                className="cs_text_btn cs_accent_color cs_fs_15 cs_medium"
              >
                Map Direction
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
