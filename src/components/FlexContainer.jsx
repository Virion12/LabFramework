import React from "react";
import { Card } from 'react-bootstrap';
const data = [
    { name: "Liam Stone", id: 1 },
    { name: "Olivia Grant", id: 2 },
    { name: "Noah Brooks", id: 3 },
    { name: "Emma Hayes", id: 4 },
    { name: "Ava Reed", id: 5 },
    { name: "Sophia King", id: 6 },
    { name: "Isabella West", id: 7 },
    { name: "Mia Scott", id: 8 },
    { name: "Amelia Carter", id: 9 },
    { name: "Harper Price", id: 10 },
    { name: "Elijah Wood", id: 11 },
    { name: "James Turner", id: 12 },
    { name: "Benjamin Fisher", id: 13 },
    { name: "Lucas Adams", id: 14 },
    { name: "Mason Clark", id: 15 },
    { name: "Ethan Lee", id: 16 },
    { name: "Logan Hill", id: 17 },
    { name: "Alexander Young", id: 18 },
    { name: "Aiden Baker", id: 19 },
    { name: "Charlotte Green", id: 20 }
];

const Item = ({name, id, className}) => 
    <Card style={{width: `18rem`}} className="border mb-3 p-3 ms-3" key={id}>{name}</Card>;

function FlexContainer() {
    return (  
        
        <div class="d-flex flex-wrap mb-3">
            {data.map(item => (
                <Item name={item.name} key={item.id} />

            ))}
        </div>

    );
}

export default FlexContainer;