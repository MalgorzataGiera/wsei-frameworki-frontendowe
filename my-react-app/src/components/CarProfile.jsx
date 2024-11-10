import React, { useState, useContext} from 'react';
import RatingBar from './RatingBar';
import AppContext from '../data/AppContext'
import { useNavigate } from 'react-router-dom';

const CarProfile = ({ id}) => {
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const car = items.find(item => item.id === id);

  const [currentRating, setCurrentRating] = useState(car ? Number(car.rating) : 0);
  const [firstClick, setFirstClick] = useState(true);

  const handleRate = () => {
    if (firstClick && currentRating != 10) {
        setCurrentRating(10);        
        dispatch({
            type: "rate",
            payload: { id, rating: 10 }
        });
    } else {
        if (currentRating === 10) {
            setCurrentRating(0);
            dispatch({
                type: "rate",
                payload: { id, rating: 0 }
            });
        } else {
            setCurrentRating(currentRating + 1);
            dispatch({
                type: "rate",
                payload: { id, rating: currentRating + 1 }
            });
        }
    }
    setFirstClick(false);
  }

  const handleEdit = () => {
    navigate(`/lab4/edit/${id}`);
  };

    return (
      car ? (
      <div className="card mb-3" style={{ width: '18rem' }}>
          <p className="card-text">ID: {car.id}</p>
          <p className="card-title">Brand: {car.brand}</p>
          <p className="card-text">Color: {car.color}</p>
          <p className="card-text">Max Speed: {car.maxSpeed}</p>
          <p className="card-text">Rating: {car.rating}</p>

          <RatingBar rate={currentRating} />

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-secondary" onClick={handleRate}>Rate</button>
          <button className="btn btn-primary" onClick={handleEdit}>
          Edit
        </button>
        </div>
      </div> ) : (<p>Car not found</p>)
    );
  }; 
  
  export default CarProfile;