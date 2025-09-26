import React from 'react';
import Review from '../../../components/Review';
import Spacing from '../../Spacing';
import TestimonialSliderStyle2 from '../../Slider/TestimonialSliderStyle2';

export default function TestimonialSection3({
  sectionTitle,
  averateReview,
  numberOfReview,
  data,
}) {
  return (
    <>
      <div className="container">
        <div className="row cs_mobile_reverse cs_gap_y_50">
          <div className="col-lg-4">
            <Spacing lg="15" md="0" />
            <div className="cs_review_box cs_style_1 cs_radius_5 cs_white_bg">
              <div className="cs_review_box_left cs_fs_38 cs_primary_color">
                {averateReview}
              </div>
              <div className="cs_review_box_right">
                <p className="mb-0">Rating based on {numberOfReview} reviews</p>
                <Review reviewNumber={averateReview} variant="cs_green_color" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            {sectionTitle && (
              <h2
                className="cs_fs_67 mb-0"
                dangerouslySetInnerHTML={{ __html: sectionTitle }}
              />
            )}
          </div>
        </div>
      </div>
      <Spacing lg="55" md="40" />
      <div className="cs_slider cs_style_1">
        <div className="container">
          <TestimonialSliderStyle2 data={data} />
        </div>
      </div>
    </>
  );
}
