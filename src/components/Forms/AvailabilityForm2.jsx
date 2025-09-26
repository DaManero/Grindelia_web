import React, { useState } from "react";
import QuantityWrap from "./QuantityWrap";
import DateRange from "./DateRange";

export default function AvailabilityForm2({ unavailable }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };
  return (
    <form action="/">
      <div className="cs_form cs_style_4 position-relative cs_zindex_10 cs_type_7 cs_mb_35">
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
            isActive={activeDropdown === "Rooms"}
          />
        </div>
        <div className="cs_form_item_group">
          <div className="cs_form_item">
            <QuantityWrap
              initialNumber={1}
              minValue={1}
              maxValue={30}
              label="Adults"
              showLabel={true}
              onDropdownToggle={handleDropdownToggle}
              isActive={activeDropdown === "Adults"}
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
              isActive={activeDropdown === "Children"}
            />
          </div>
        </div>
      </div>
      <h3 className="cs_fs_28 cs_white_color cs_mb_20">Extra Services</h3>
      <div className="cs_extra_service_item_list cs_mb_35">
        <div className="cs_extra_service_item">
          <div className="cs_checkbox">
            <input type="checkbox" />
            <label>Room Clean</label>
          </div>
          <div className="cs_extra_service_item_right">
            <span>$20 /Night</span>
          </div>
        </div>
        <div className="cs_extra_service_item">
          <div className="cs_checkbox">
            <input type="checkbox" />
            <label>Wellness & Spa</label>
          </div>
          <div className="cs_extra_service_item_right">
            <span>$10 /Person</span>
            <div className="cs_form_item">
              <QuantityWrap
                initialNumber={1}
                minValue={1}
                maxValue={30}
                label="Wellness"
                showLabel={false}
                onDropdownToggle={handleDropdownToggle}
                isActive={activeDropdown === "Wellness"}
              />
            </div>
          </div>
        </div>
        <div className="cs_extra_service_item">
          <div className="cs_checkbox">
            <input type="checkbox" />
            <label>Massage</label>
          </div>
          <div className="cs_extra_service_item_right">
            <span>$15 /Person</span>
            <div className="cs_form_item">
              <QuantityWrap
                initialNumber={1}
                minValue={1}
                maxValue={30}
                label="Massage"
                showLabel={false}
                onDropdownToggle={handleDropdownToggle}
                isActive={activeDropdown === "Massage"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_form_item_btn">
        {unavailable ? (
          <button className="cs_btn cs_style_1 cs_color_1 cs_fs_15 cs_medium cs_radius_5 w-100 cs_disabled_room_btn">
            Not Available for 10/05/2025 to 10/05/2025 <br />
            Please Try a Different Date
          </button>
        ) : (
          <button className="cs_btn cs_style_1 cs_color_1 cs_fs_15 cs_medium cs_radius_5 w-100">
            Check Availability
          </button>
        )}
      </div>
    </form>
  );
}
