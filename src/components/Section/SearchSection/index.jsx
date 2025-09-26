import React from 'react';
import AvailabilityForm from '../../../components/Forms/AvailabilityForm';

export default function SearchSection({ sectionTitle, variant }) {
  return (
    <div className="container">
      {sectionTitle && (
        <>
          <h2
            className="text-center cs_white_color cs_fs_50 mb-0 cs_form_heading_1"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          <div className="cs_height_76 cs_height_lg_55" />
        </>
      )}
      <AvailabilityForm
        variant={`${variant ? variant : 'cs_accent_bg cs_radius_5'}`}
      />
    </div>
  );
}
