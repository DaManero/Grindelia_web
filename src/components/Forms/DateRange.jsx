import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';

export default function DateRange() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset the time part

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1); // Set tomorrow's date

  const [selectedDates, setSelectedDates] = useState([today, tomorrow]);

  const disableFutureDates = date => {
    return date < today;
  };

  const handleDateChange = dates => {
    setSelectedDates(dates);
  };
  return (
    <>
      <DateRangePicker
        disabledDate={disableFutureDates}
        value={selectedDates}
        onChange={handleDateChange}
        className="cs_datetimes"
      />
      <div className="cs_form_item cs_date_item">
        <label className="cs_white_color">Check in :</label>
        <span className="cs_start_date cs_start_date_value cs_white_color">
          {selectedDates[0] ? selectedDates[0].toLocaleDateString() : 'None'}
        </span>
      </div>
      <div className="cs_form_item cs_date_item">
        <label className="cs_white_color">Check out :</label>
        <span className="cs_end_date cs_end_date_value cs_white_color">
          {selectedDates[1] ? selectedDates[1].toLocaleDateString() : 'None'}
        </span>
      </div>
    </>
  );
}
