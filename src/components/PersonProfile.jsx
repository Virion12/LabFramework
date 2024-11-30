import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import RatingBar from './RatingBar';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

function PersonProfile( {person} ) {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const navigate = useNavigate();
  return (
    <>
      <div key={person.id}>
      
        
        <h4>UserId: {person.id}</h4>
        <RatingBar rate={person.rating}/>
        <p>
            <strong>Name: {person.name}</strong>
        </p>
        <p>
            <span>Birthdate: {person.birth}</span>
        </p>
        <p>
            <span>Eyes: {person.eyes}</span>
        </p>
        
        <div className="d-flex justify-content-center align-items-center p-1" >

        <Button className="btn btn-primary" onClick={() => {
          dispatch({
            type: 'edit',
            id: person.id
            });
            navigate(`/lab4/edit/${person.id}`);
          }}>Edit</Button>

        <Button className="btn btn-info m-3" onClick={() => {
          dispatch({
            type: 'rate',
            id: person.id
          });
        }}>Rate </Button>

        <Button className="btn btn-danger" onClick={() => {
          dispatch({
            type: 'delete',
            id: person.id
            });
        }}>Delete</Button>

        
        </div>
      </div>
    </>
  )
}

export default PersonProfile

  // const [rank, setRank] = useState(0);

  // const rateClick = () => {
  //   if(rank === 0){
  //     setRank(10);                 Lab3/3
  //   } else if(rank === 10){
  //     setRank(1);
  //   } else {
  //     setRank(rank + 1);
  //   }
  // }