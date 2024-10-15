import React from 'react';
import CarProfile from './CarProfile';
import { data as carData } from './module-data'; 
function App() {
  return (
    <div className="App">
      <h1>Car Profiles</h1>
      
      {carData.map(car => (
        <CarProfile 
          key={car.id} 
          id={car.id}
          brand={car.brand}
          year={car.year}
          color={car.color}
        />
      ))}
    </div>
  );
}

export default App;