import { useState, useEffect } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";

export default function CompleteReservationPage() {
  pageTitle("Complete Reservation");
  const [paymentMethod, setPaymentMethod] = useState("Office Payment");

  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <>
      <PageHeadingSection
        title="Complete Your Reservation"
        bgImgUrl="/images/page_heading_bg_rooms.jpeg"
        variant="cs_size_1"
      />
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-4">
              <div className="cs_booking_card cs_radius_5">
                <div className="cs_mb_20">
                  <p className="cs_mb_5">Check In :</p>
                  <div className="cs_booking_time">
                    <span className="cs_primary_font cs_fs_21 cs_primary_color">
                      Sunday, May 15 2025
                    </span>
                    <span>(From 11:00 AM)</span>
                  </div>
                </div>
                <div className="cs_mb_30">
                  <p className="cs_mb_5">Check Out :</p>
                  <div className="cs_booking_time">
                    <span className="cs_primary_font cs_fs_21 cs_primary_color">
                      Friday, May 20 2025
                    </span>
                    <span>(Until 10:00 PM)</span>
                  </div>
                </div>
                <ul className="cs_booking_info_list cs_mp_0">
                  <li>
                    <span className="cs_primary_color">Deluxe Room</span>
                    <span>$320.00</span>
                  </li>
                  <li>
                    <span className="cs_primary_color">Adults</span>
                    <span>1 Person</span>
                  </li>
                  <li>
                    <span className="cs_primary_color">Children</span>
                    <span>0 Person</span>
                  </li>
                  <li>
                    <span className="cs_primary_color">Number of Room</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span className="cs_primary_color">Service Charge</span>
                    <span>$10.00</span>
                  </li>
                  <li>
                    <span className="cs_primary_color">Tax</span>
                    <span>$15.40</span>
                  </li>
                  <li>
                    <span className="cs_primary_color">Total</span>
                    <span className="cs_semibold cs_primary_color">
                      $345.40
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cs_pl_60">
                <h2 className="cs_fs_38 cs_mb_20">Fill Your Information</h2>
                <div className="row cs_gap_y_20">
                  <div className="col-sm-6">
                    <label>Full Name*</label>
                    <input
                      type="text"
                      className="cs_form_field_2 cs_radius_20"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label>Last Name*</label>
                    <input
                      type="text"
                      className="cs_form_field_2 cs_radius_20"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label>Email*</label>
                    <input
                      type="text"
                      className="cs_form_field_2 cs_radius_20"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label>Phone*</label>
                    <input
                      type="text"
                      className="cs_form_field_2 cs_radius_20"
                    />
                  </div>
                  <div className="col-lg-12">
                    <label>Address</label>
                    <input
                      type="text"
                      className="cs_form_field_2 cs_radius_20"
                    />
                  </div>
                </div>
                <div className="cs_height_40 cs_height_lg_40" />
                <h2 className="cs_fs_38 cs_mb_25">Choose Payment Method</h2>
                <ul className="cs_payment_method_list cs_primary_color cs_payment_method_list">
                  <li>
                    <div className="cs_radiobox">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Office Payment"
                        checked={paymentMethod === "Office Payment"}
                        onChange={handlePaymentMethodChange}
                      />
                      <label>Office Payment</label>
                    </div>
                  </li>
                  <li>
                    <div className="cs_radiobox">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Paypal"
                        checked={paymentMethod === "Paypal"}
                        onChange={handlePaymentMethodChange}
                      />
                      <label>
                        <img src="/images/icons/paypal.svg" alt="" />
                        Paypal
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="cs_radiobox">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Debit/Credit card"
                        checked={paymentMethod === "Debit/Credit card"}
                        onChange={handlePaymentMethodChange}
                      />
                      <label>
                        <img src="/images/icons/card.svg" alt="" />
                        Debit/Credit card
                      </label>
                    </div>
                    {paymentMethod === "Debit/Credit card" && (
                      <div className="cs_debit_card_box">
                        <div className="cs_height_20 cs_height_lg_20" />
                        <div className="row cs_gap_y_20 cs_mb_25">
                          <div className="col-lg-6">
                            <label>Card Holder Name*</label>
                            <input
                              type="text"
                              className="cs_form_field_2 cs_radius_20"
                            />
                          </div>
                          <div className="col-lg-6">
                            <label>Card Number*</label>
                            <input
                              type="text"
                              className="cs_form_field_2 cs_radius_20"
                            />
                          </div>
                          <div className="col-lg-6">
                            <label>MM/YY*</label>
                            <input
                              type="text"
                              className="cs_form_field_2 cs_radius_20"
                            />
                          </div>
                          <div className="col-lg-6">
                            <label>CSV*</label>
                            <input
                              type="text"
                              className="cs_form_field_2 cs_radius_20"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
                <div className="cs_mb_25">
                  <div className="cs_checkbox">
                    <input type="checkbox" />
                    <label>
                      I have read and agree to the{" "}
                      <a href="#" target="_blank">
                        Terms &amp; Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button className="cs_btn cs_style_2 cs_accent_btn cs_medium cs_radius_20 cs_fs_15">
                  <b>Complete Booking</b>
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
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
