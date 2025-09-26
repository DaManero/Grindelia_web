import React, { useState } from 'react';
import QuantityWrap from './QuantityWrap';
import DateRange from './DateRange';

export default function AvailabilityForm({ variant }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = label => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };
  return (
    <form
      action="/"
      className={`cs_form cs_style_4 position-relative cs_zindex_10 ${
        variant ? variant : ''
      }`}
    >
      <div className="cs_date_items">
        <DateRange />
      </div>
      <div className="cs_form_item">
        <QuantityWrap
          initialNumber={1}
          minValue={1}
          maxValue={50}
          label="Rooms"
          showLabel={true}
          onDropdownToggle={handleDropdownToggle}
          isActive={activeDropdown === 'Rooms'}
        />
      </div>
      <div className="cs_form_item">
        <QuantityWrap
          initialNumber={1}
          minValue={1}
          maxValue={30}
          label="Adults"
          showLabel={true}
          onDropdownToggle={handleDropdownToggle}
          isActive={activeDropdown === 'Adults'}
        />
      </div>
      <div className="cs_form_item">
        <QuantityWrap
          initialNumber={0}
          minValue={0}
          maxValue={10}
          label="Children"
          showLabel={true}
          onDropdownToggle={handleDropdownToggle}
          isActive={activeDropdown === 'Children'}
        />
      </div>
      <div className="cs_form_item_btn">
        <button className="cs_btn cs_style_1 cs_color_1 cs_fs_15 cs_medium cs_radius_5 w-100">
          Check Availability
        </button>
      </div>
    </form>
  );
}
