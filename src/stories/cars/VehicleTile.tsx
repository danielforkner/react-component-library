import React, { useState } from 'react';
import './VehicleTile.css';

type Props = {
  label:
    | 'Coupes'
    | 'Crossovers'
    | 'Diesel Engines'
    | 'Pickup Trucks'
    | 'Sport Utilities'
    | 'Sports Cars'
    | 'Sedans';
};

const VehicleTile = ({ label }: Props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <button
      className={`${selected ? 'selected' : null} vehicle-type-tile`}
      onClick={handleClick}
    >
      <div
        className={`selected-check ${
          selected ? 'selected-check--visible' : null
        }`}
      >
        <div className="check-svg-container">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="16"
            fill="#fff"
            aria-hidden="true"
            className="check-svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
          </svg>
        </div>
      </div>
      <img
        src={`src/stories/cars/assets/${label.split(' ').join('-')}.svg`}
        alt={`${label} icon`}
        style={{
          width: '78px',
          height: '43px',
          aspectRatio: 'auto 78 / 43',
        }}
      />
      <div className="vehicle-type-tile-title">{label}</div>
    </button>
  );
};

export default VehicleTile;
