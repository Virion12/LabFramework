import React, { useState, useEffect } from 'react';
import FlexContainer from '../components/FlexContainer';
import { data as initialData } from '../data/module-data'; 

function Lab3() {
    // Load data from localStorage or use initial data if no saved data
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('carData');
        return savedData ? JSON.parse(savedData) : initialData;
    });

    // Update localStorage whenever data changes
    const updateData = (newData) => {
        setData(newData);  // Update the local state
        localStorage.setItem('carData', JSON.stringify(newData));  // Save to localStorage
    };

    return (
        <div>
            <h1>Witamy w Laboratorium 3</h1>
            <FlexContainer data={data} updateData={updateData} />
        </div>
    );
}

export default Lab3;
