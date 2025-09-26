import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';

const pad = num => ('0' + num).slice(-2);

const QuantityWrap = ({
  initialNumber,
  minValue,
  maxValue,
  label,
  showLabel,
  isActive,
  onDropdownToggle,
}) => {
  const [quantity, setQuantity] = useState(initialNumber);

  const handleIncrement = () => {
    if (quantity < maxValue) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > minValue) {
      setQuantity(quantity - 1);
    }
  };

  const handleButtonClick = e => {
    e.stopPropagation();
    onDropdownToggle(label);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (!event.target.closest('.cs_quantity_wrap')) {
        onDropdownToggle(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onDropdownToggle]);

  return (
    <div className={`cs_quantity_wrap ${isActive ? 'active' : ''}`}>
      {showLabel && <label className="cs_white_color">{label} :</label>}
      <span className="cs_quantity_btn" onClick={handleButtonClick}>
        {pad(quantity)}
      </span>
      {isActive && (
        <div className="cs_quantity_dropdown cs_primary_color">
          <div className="cs_quantity_dropdown_item">
            {showLabel && <span className="cs_quantity_title">{label}:</span>}
            <div className="cs_count">
              <button
                className="cs_quantity_decrement cs_center"
                type="button"
                onClick={handleDecrement}
              >
                <Icon icon="ic:round-minus" width={20} height={20} />
              </button>
              <span
                className="cs_quantity_number"
                data-min-value={minValue}
                data-max-value={maxValue}
              >
                {pad(quantity)}
              </span>
              <button
                className="cs_quantity_increment cs_center"
                type="button"
                onClick={handleIncrement}
              >
                <Icon icon="ic:round-plus" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuantityWrap;
