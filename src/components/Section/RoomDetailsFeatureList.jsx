import React from 'react';

export default function RoomDetailsFeatureList({ data }) {
  return (
    <div className="container">
      <div className="row cs_gap_y_40">
        {data?.map((item, index) => (
          <div className="col-lg-6" key={index}>
            {item.title && (
              <h3 className="cs_fs_38 cs_mb_29 cs_mb_lg_20">{item.title}</h3>
            )}
            <ul className="cs_list cs_style_1 cs_type_1 cs_mp_0">
              {item?.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(.clip0_95_13)">
                      <path
                        d="M24.9996 12.5001C24.9996 10.7334 24.1038 9.17611 22.7413 8.25736C23.0549 6.64486 22.5871 4.91048 21.3382 3.66048C20.0892 2.41152 18.3549 1.94382 16.7413 2.25736C15.8226 0.894857 14.2653 -0.000976562 12.4986 -0.000976562C10.7319 -0.000976562 9.17464 0.894857 8.25589 2.25736C6.64339 1.94382 4.90798 2.41152 3.65902 3.66048C2.41006 4.90944 1.94235 6.64382 2.25589 8.25736C0.893392 9.17611 -0.00244141 10.7334 -0.00244141 12.5001C-0.00244141 14.2667 0.893392 15.824 2.25589 16.7428C1.94235 18.3553 2.41006 20.0907 3.65902 21.3396C4.90798 22.5886 6.64235 23.0563 8.25589 22.7428C9.17464 24.1053 10.7319 25.0011 12.4986 25.0011C14.2653 25.0011 15.8226 24.1053 16.7413 22.7428C18.3538 23.0563 20.0892 22.5886 21.3382 21.3396C22.5871 20.0907 23.0549 18.3563 22.7413 16.7428C24.1038 15.824 24.9996 14.2667 24.9996 12.5001ZM12.4049 16.0615C12.0017 16.4646 11.4715 16.6657 10.9392 16.6657C10.4069 16.6657 9.87152 16.4626 9.46423 16.0563L6.56631 13.248L8.01735 11.7511L10.9267 14.5709L16.9778 8.63236L18.4403 10.1167L12.4049 16.0615Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath className="clip0_95_13">
                        <rect width={25} height={25} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: feature }} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
