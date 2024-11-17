import React, { useState } from 'react';
import RatingBar from './RatingBar';

const CarProfile = ({ id, brand, year, color, initialRating, dispatch }) => {
  const [rate, setRate] = useState(initialRating || 0); // Initialize rate with initialRating

  const rateValidator = () => {
    const newRate = rate >= 10 ? 10 : rate + 1;
    setRate(newRate);

  
    dispatch({
      type: 'rate',
      payload: { id, newRating: newRate }  
    });
  };

  const deleteCar = () => {
 
    dispatch({
      type: 'delete',
      payload: { id }  
    });
  };

  const editCar = () => {
   
    dispatch({
      type: 'edit',
      payload: { id } 
    });
  };

  return (
    <div className="car-profile ml-3" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <RatingBar rate={rate} />
      <h3>Car ID: {id}</h3>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Color:</strong> {color}</p>

      <button
        type="button"
        className="btn btn-danger m-3"
        onClick={deleteCar}  
      >
        Delete
      </button>

 
      <button
        type="button"
        className="btn btn-info m-3"
        onClick={editCar} 
      >
        Edit
      </button>

    
      <button
        type="button"
        className="btn btn-success m-3"
        onClick={rateValidator} 
      >
        Rate: {rate}
      </button>
    </div>
  );
};

export default CarProfile;
