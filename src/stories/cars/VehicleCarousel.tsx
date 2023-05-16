import React from 'react';
import VehicleTile from './VehicleTile';
import './VehicleCarousel.css';

const VehicleCarousel = () => {
  return (
    <div className="carousel">
      <div className="item">
        <VehicleTile label="Coupes" />
      </div>
      <div className="item">
        <VehicleTile label="Crossovers" />
      </div>
      <div className="item">
        <VehicleTile label="Sedans" />
      </div>
      <div className="item">
        <VehicleTile label="Diesel" />
      </div>
      <div className="item">
        <VehicleTile label="Trucks" />
      </div>
      <div className="item">
        <VehicleTile label="SUVs" />
      </div>
      <div className="item">
        <VehicleTile label="Sports Cars" />
      </div>
    </div>
  );
};

export default VehicleCarousel;
