import React from 'react';

const RatingBar = ({ rate }) => {
  const clampedRate = Math.min(Math.max(rate, 0), 10); 

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(10)].map((_, index) => (
        <span key={index}>
          {index < clampedRate ? '★' : '☆'} 
        </span>
      ))}
    </div>
  );
};

export default RatingBar;
