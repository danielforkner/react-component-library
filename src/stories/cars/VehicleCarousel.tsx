import React from 'react';
import VehicleTile from './VehicleTile';
import './VehicleCarousel.css';

const VehicleCarousel = () => {
  return (
    <div className="horizontal-center">
      <div className="carousel-container">
        <div className="carousel-container-inner">
          <div className="item">
            <VehicleTile label="Coupes" />
          </div>
          <div className="item">
            <VehicleTile label="Crossovers" />
          </div>
          <div className="item">
            <VehicleTile label="Sedans" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCarousel;
