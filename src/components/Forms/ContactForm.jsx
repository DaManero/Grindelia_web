import React from 'react';

export default function ContactForm() {
  return (
    <form action="/contact" className="cs_form cs_style_2">
      <label>Full Name*</label>
      <input type="text" className="cs_form_field_2 cs_radius_20" />
      <div className="cs_height_16 cs_height_lg_16" />
      <label>Email*</label>
      <input type="text" className="cs_form_field_2 cs_radius_20" />
      <div className="cs_height_16 cs_height_lg_16" />
      <label>Write Your Comment*</label>
      <textarea
        cols={30}
        rows={6}
        className="cs_form_field_2 cs_radius_20"
        defaultValue={''}
      />
      <div className="cs_height_25 cs_height_lg_25" />
      <button className="cs_btn cs_style_2 cs_accent_btn cs_medium cs_radius_20 cs_fs_15">
        <b>Send Message</b>
        <span>
          <i>
            <svg
              width={9}
              height={9}
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00431 0.872828C9.00431 0.458614 8.66852 0.122828 8.25431 0.122828L1.50431 0.122827C1.0901 0.122827 0.754309 0.458614 0.754309 0.872828C0.754309 1.28704 1.0901 1.62283 1.50431 1.62283H7.50431V7.62283C7.50431 8.03704 7.84009 8.37283 8.25431 8.37283C8.66852 8.37283 9.00431 8.03704 9.00431 7.62283L9.00431 0.872828ZM1.53033 8.65747L8.78464 1.40316L7.72398 0.342497L0.46967 7.59681L1.53033 8.65747Z"
                fill="currentColor"
              />
            </svg>
          </i>
          <i>
            <svg
              width={9}
              height={9}
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00431 0.872828C9.00431 0.458614 8.66852 0.122828 8.25431 0.122828L1.50431 0.122827C1.0901 0.122827 0.754309 0.458614 0.754309 0.872828C0.754309 1.28704 1.0901 1.62283 1.50431 1.62283H7.50431V7.62283C7.50431 8.03704 7.84009 8.37283 8.25431 8.37283C8.66852 8.37283 9.00431 8.03704 9.00431 7.62283L9.00431 0.872828ZM1.53033 8.65747L8.78464 1.40316L7.72398 0.342497L0.46967 7.59681L1.53033 8.65747Z"
                fill="currentColor"
              />
            </svg>
          </i>
        </span>
      </button>
    </form>
  );
}
