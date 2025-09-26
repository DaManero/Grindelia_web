import React from 'react';
import SectionHeading from '../../SectionHeading';
import CustomCursor from '../../CustomCursor';
import { Link } from 'react-router-dom';

export default function ServiceSection4({
  sectionTitle,
  sectionSubTitle,
  data,
}) {
  return (
    <div className="container">
      <SectionHeading
        sectionTitle={sectionTitle}
        sectionSubTitle={sectionSubTitle}
        bottomSpaceLg="60"
        bottomSpaceMd="40"
        variant="text-center"
      />
      <ul className="cs_list cs_style_2 cs_mp_0">
        {data?.map((item, index) => (
          <li key={index}>
            <CustomCursor variant="cs_style_3" imgUrl={item.imgUrl}>
              <Link to={item.href} className="cs_list_in d-block">
                <h2 className="cs_list_title mb-0 cs_fs_50 cs_secondary_color">
                  {item.title}
                </h2>
                <span className="cs_list_icon cs_center rounded-circle cs_ternary_bg cs_primary_color">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </Link>
            </CustomCursor>
          </li>
        ))}
      </ul>
    </div>
  );
}
