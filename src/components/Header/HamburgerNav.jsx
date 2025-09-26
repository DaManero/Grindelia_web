import React from 'react';
import Nav from './Nav';
import HamburgerInfo from './HamburgerInfo';

export default function HamburgerNav({
  setMobileToggle,
  mobileToggle,
  hamburgerActive,
  setHamburgerActive,
}) {
  return (
    <div className={`cs_hamburger_header ${hamburgerActive ? 'active' : ''}`}>
      <div className="container-fluid cs_plr_100">
        <div className="cs_hamburger_header_top">
          <div className="cs_hamburger_brand">
            <a className="cs_site_branding" href="index.html">
              <img src="/images/logo.svg" alt="Logo" />
            </a>
          </div>
          <button
            className="cs_close_hamburger"
            type="button"
            onClick={() => setHamburgerActive(!hamburgerActive)}
          >
            <svg
              width={30}
              height={30}
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8175 11.0675L15.885 15L19.8175 18.9325C20.0613 19.1763 20.0613 19.5725 19.8175 19.8162C19.695 19.9387 19.535 19.9987 19.375 19.9987C19.215 19.9987 19.055 19.9375 18.9325 19.8162L15 15.8837L11.0675 19.8162C10.945 19.9387 10.785 19.9987 10.625 19.9987C10.465 19.9987 10.305 19.9375 10.1825 19.8162C9.93875 19.5725 9.93875 19.1763 10.1825 18.9325L14.115 15L10.1825 11.0675C9.93875 10.8238 9.93875 10.4275 10.1825 10.1838C10.4262 9.94 10.8225 9.94 11.0662 10.1838L14.9987 14.1163L18.9313 10.1838C19.175 9.94 19.5713 9.94 19.815 10.1838C20.0588 10.4275 20.0588 10.8238 19.815 11.0675H19.8175ZM30 15C30 23.2712 23.2712 30 15 30C6.72875 30 0 23.2712 0 15C0 6.72875 6.72875 0 15 0C23.2712 0 30 6.72875 30 15ZM28.75 15C28.75 7.41875 22.5812 1.25 15 1.25C7.41875 1.25 1.25 7.41875 1.25 15C1.25 22.5812 7.41875 28.75 15 28.75C22.5812 28.75 28.75 22.5812 28.75 15Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="cs_hamburger_header_in">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Nav
                setMobileToggle={setMobileToggle}
                mobileToggle={mobileToggle}
                variant="cs_hamburger_menu cs_fs_38 cs_primary_font cs_white_color"
              />
            </div>
            <div className="col-lg-6">
              <HamburgerInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
