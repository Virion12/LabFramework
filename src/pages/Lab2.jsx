import React from 'react';
import CarProfile from '../components/CarProfile';
import {Route,Routes, useParams} from 'react-router-dom'
import { data as carData } from '../data/module-data';

function Lab2() {
  const {id} = useParams();

  if(!id)
  {
      return <h1>Brak identyfikatora auta</h1>;
  }
  const car = carData.find(car => car.id == parseInt(id));

  if(!car)
    {
        return <h1>nie znaleziono auta o tym identyfikatorze.</h1>;
    }
    return (  
            
        <div className="App ">
        <h1>Car Profile</h1>
        <CarProfile key={car.id} id={car.id} brand={car.brand} year={car.year} color={car.color}/>
      </div>


    );
}

export default Lab2;