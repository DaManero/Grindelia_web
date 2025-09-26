import { Link } from 'react-router-dom';
import ButtonStyle2 from '../Button/ButtonStyle2';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import HamburgerNav from './HamburgerNav';

export default function HeaderStyle3({ logoUrl, variant, fullWidth }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs_gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs_gescout_sticky cs_gescout_show'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`cs_site_header cs_style_2 cs_primary_color cs_sticky_header ${
          variant ? variant : ''
        } ${isSticky ? isSticky : ''}`}
      >
        <div className="cs_main_header">
          <div className={fullWidth ? 'container-fluid' : 'container'}>
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <button
                  className="cs_hamburger_btn"
                  type="button"
                  onClick={() => setHamburgerActive(!hamburgerActive)}
                >
                  <span className="cs_hamburger_btn_in">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>
              <div className="cs_main_header_center">
                <Link className="cs_site_branding" to="/">
                  <img src={logoUrl} alt="Logo" />
                </Link>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_header_info_box">
                  <div className="cs_header_number">
                    <span className="cs_header_number_icon">
                      <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_249_395)">
                          <path
                            d="M13.5415 1.04168C13.5415 0.765415 13.6512 0.500463 13.8466 0.305113C14.0419 0.109762 14.3069 1.55587e-05 14.5832 1.55587e-05C17.3449 0.00304847 19.9927 1.10149 21.9455 3.05434C23.8983 5.00718 24.9968 7.65494 24.9998 10.4167C24.9998 10.6929 24.8901 10.9579 24.6947 11.1533C24.4994 11.3486 24.2344 11.4583 23.9582 11.4583C23.6819 11.4583 23.4169 11.3486 23.2216 11.1533C23.0262 10.9579 22.9165 10.6929 22.9165 10.4167C22.914 8.20731 22.0352 6.08913 20.473 4.52687C18.9107 2.9646 16.7925 2.08583 14.5832 2.08335C14.3069 2.08335 14.0419 1.9736 13.8466 1.77825C13.6512 1.5829 13.5415 1.31795 13.5415 1.04168ZM14.5832 6.25002C15.6882 6.25002 16.748 6.689 17.5294 7.4704C18.3108 8.25181 18.7498 9.31161 18.7498 10.4167C18.7498 10.6929 18.8596 10.9579 19.0549 11.1533C19.2503 11.3486 19.5152 11.4583 19.7915 11.4583C20.0678 11.4583 20.3327 11.3486 20.5281 11.1533C20.7234 10.9579 20.8332 10.6929 20.8332 10.4167C20.8315 8.75959 20.1725 7.17084 19.0007 5.99909C17.829 4.82735 16.2402 4.16834 14.5832 4.16668C14.3069 4.16668 14.0419 4.27643 13.8466 4.47178C13.6512 4.66713 13.5415 4.93208 13.5415 5.20835C13.5415 5.48462 13.6512 5.74957 13.8466 5.94492C14.0419 6.14027 14.3069 6.25002 14.5832 6.25002ZM24.055 17.4365C24.6587 18.0418 24.9977 18.8618 24.9977 19.7167C24.9977 20.5716 24.6587 21.3916 24.055 21.9969L23.1071 23.0896C14.5759 31.2573 -6.18455 10.5021 1.85711 1.94377L3.05503 0.902099C3.66104 0.315304 4.47371 -0.00930832 5.31722 -0.00151065C6.16074 0.00628702 6.96726 0.345868 7.56232 0.943766C7.59461 0.976057 9.52482 3.48335 9.52482 3.48335C10.0976 4.08504 10.4164 4.88432 10.415 5.71502C10.4137 6.54572 10.0922 7.34395 9.51753 7.94377L8.31128 9.46043C8.97883 11.0824 9.9603 12.5565 11.1993 13.798C12.4383 15.0395 13.9104 16.024 15.5311 16.6948L17.0571 15.4813C17.657 14.907 18.4551 14.5859 19.2855 14.5848C20.116 14.5836 20.915 14.9024 21.5165 15.475C21.5165 15.475 24.0227 17.4042 24.055 17.4365ZM22.6217 18.9511C22.6217 18.9511 20.129 17.0333 20.0967 17.0011C19.8821 16.7883 19.5921 16.6689 19.2899 16.6689C18.9877 16.6689 18.6978 16.7883 18.4832 17.0011C18.455 17.0302 16.354 18.7042 16.354 18.7042C16.2124 18.8169 16.0439 18.8908 15.8651 18.9185C15.6863 18.9463 15.5033 18.927 15.3342 18.8625C13.2347 18.0808 11.3277 16.857 9.74236 15.2741C8.15704 13.6911 6.93045 11.7859 6.14566 9.68752C6.07607 9.51612 6.05338 9.32927 6.07993 9.1462C6.10648 8.96313 6.18129 8.79043 6.2967 8.64585C6.2967 8.64585 7.97066 6.54377 7.99878 6.51668C8.21156 6.30208 8.33095 6.01212 8.33095 5.70991C8.33095 5.40771 8.21156 5.11774 7.99878 4.90314C7.96649 4.87189 6.04878 2.3771 6.04878 2.3771C5.83097 2.18179 5.5467 2.0772 5.25425 2.08475C4.96179 2.09231 4.6833 2.21144 4.47586 2.41772L3.27795 3.45939C-2.59914 10.5261 15.3915 27.5188 21.5842 21.6667L22.5332 20.5729C22.7555 20.367 22.8891 20.0826 22.9056 19.7799C22.9221 19.4772 22.8203 19.18 22.6217 18.9511Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_249_395">
                            <rect width={25} height={25} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <a href="mailto:+222-4454-6789">+222-4454-6789</a>
                  </div>
                  <ButtonStyle2
                    btnText="Reservation"
                    btnUrl="/rooms"
                    variant="cs_radius_5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HamburgerNav
        setMobileToggle={setMobileToggle}
        mobileToggle={mobileToggle}
        hamburgerActive={hamburgerActive}
        setHamburgerActive={setHamburgerActive}
      />
    </>
  );
}
