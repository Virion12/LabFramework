import React from 'react';

const CarProfile = ({ id, brand, year, color }) => {
  return (
    <div className="car-profile" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>Car ID: {id}</h3>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Color:</strong> {color}</p>
    </div>
  );
};

export default CarProfile;