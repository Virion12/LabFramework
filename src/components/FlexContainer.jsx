import React, { useReducer } from 'react';
import AppReducer from '../data/AppReducer';
import CarProfile from './CarProfile';

function FlexContainer({ data = [], updateData }) {
    const [items, dispatch] = useReducer(AppReducer, data);

    // After state changes, update the data in the parent component
    const handleStateChange = (newState) => {
        updateData(newState);  // Pass the updated state back to the parent
    };

    React.useEffect(() => {
        handleStateChange(items);  // Whenever items change, update data
    }, [items]);

    return (
        <div className="d-flex flex-wrap">
            {items.map(car => (
                <CarProfile
                    key={car.id}
                    id={car.id}
                    brand={car.brand}
                    year={car.year}
                    color={car.color}
                    initialRating={car.rating}  // Pass initial rating
                    dispatch={dispatch}          // Pass dispatch to CarProfile for state updates
                />
            ))}
        </div>
    );
}

export default FlexContainer;
