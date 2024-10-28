import React from 'react';
import CarProfile from '../components/CarProfile';
import { data as carData } from '../data/module-data'; 
import {Route,Routes} from 'react-router-dom'

function Lab1() {
    return (  
            
        <div className="App">
        <h1>Car Profiles</h1>
  
        {carData.map(car => (
          <CarProfile
            key={car.id}
            id={car.id}
            brand={car.brand}
            year={car.year}
            color={car.color} />
        ))}
      </div>


    );
}

export default Lab1;